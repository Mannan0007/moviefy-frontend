import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      navigate("/login");
    }
  };


const handleRemoveFromWatchlist = async (movieId) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    const { data } = await axios.delete(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/watchlist/delete`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id: movieId }, // Pass movie ID in body for DELETE
      }
    );

    toast({
      title: data.message,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Update frontend watchlist state
    setWatchlist((prev) => prev.filter((item) => item.id !== movieId));
  } catch (error) {
    toast({
      title: error.response?.data?.message || "Failed to remove movie",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};


  const fetchWatchlist = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      if (!token) {
        alert("No token found. Please login again.");
        navigate("/login");
        return;
      }

      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/watchlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWatchlist(data.watchlist || []);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
      alert("Failed to load watchlist.");
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsWatched = async (movieId) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      const { data } = await axios.put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/watchlist/mark-watched`,
        { id: movieId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //     toast({
      //       title:'Marked as watched'
      //   })q!~
      //   alert(data.message);

      setWatchlist((prevList) => {
        const updatedList = prevList.map((movie) => {
          if (movie.id === movieId) {
            const newWatchedStatus = !movie.watched;

            toast({
              title: newWatchedStatus
                ? "Marked as watched"
                : "Marked as unwatched",
            });

            return { ...movie, watched: newWatchedStatus };
          }
          return movie;
        });

        return updatedList;
      });
    } catch (error) {
      console.error("Failed to mark as watched:", error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const toWatch = watchlist.filter((item) => !item.watched);
  const watched = watchlist.filter((item) => item.watched);

  return (
    <div style={{ padding: "2rem", background: "black", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"/home"}>
          <Button style={{ margin: "10px" }}>
            <IoMdArrowRoundBack />
          </Button>
        </Link>

        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
          >
            <CgProfile style={{ fontSize: "30px", color: "white" }} />
          </MenuButton>
          <MenuList style={{ color: "black" }}>
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>

        {/* <Button
          style={{ position: "absolute", right: "1px", margin: "10px" }}
          onClick={handleLogout}
        >
          Logout
        </Button> */}
      </div>

      <h1 style={{ fontSize: "2pc", textAlign: "center", marginBottom: "2pc" }}>
        Your Watchlist
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {toWatch.length === 0 ? (
            <p>No movies to watch.</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {toWatch.map((movie) => (
                <>
                  <div
                    key={movie.id}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "1rem",
                      width: "200px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={movie.poster || "https://via.placeholder.com/150"}
                      alt={movie.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <h3>{movie.title}</h3>
                    <Button
                      colorScheme="green"
                      size="sm"
                      mt="2"
                      onClick={() => handleMarkAsWatched(movie.id)}
                    >
                      Mark as Watched
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      mt="2"
                      onClick={() => handleRemoveFromWatchlist(movie.id)}
                    >
                      <IoTrashBin />
                    </Button>
                  </div>
                </>
              ))}
            </div>
          )}

          {/* Watched Section */}
          <h2
            style={{
              marginTop: "2rem",
              fontSize: "2pc",
              textAlign: "center",
              marginBottom: "2pc",
            }}
          >
            Watched
          </h2>
          {watched.length === 0 ? (
            <p>No movies watched yet.</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {watched.map((movie) => (
                <div
                  key={movie.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "1rem",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={movie.poster || "https://via.placeholder.com/150"}
                    alt={movie.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <h3>{movie.title}</h3>
                  <Button
                    colorScheme="yellow"
                    size="sm"
                    mt="2"
                    onClick={() => handleMarkAsWatched(movie.id)}
                  >
                    Mark as Unwatched
                  </Button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Watchlist;
