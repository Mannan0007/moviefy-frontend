import React, { useState } from "react";
import "../styles/Home.css";
import NavBar from "./NavBar";
import { Box, Container, Text, useToast, Image } from "@chakra-ui/react";
import movieDB from "../assets/Moviedb";
import TrendingMovies from "../assets/TrendingMovies";
import BollywoodMovies from "../assets/Bollywood";
import axios from "axios";
import Bollywood from "./Bollywood";
import Trending from "./Trending";
import Footer from "./Footer.jsx";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  // Combine all movies into one array

  const allMovies = [
    ...movieDB,
    ...TrendingMovies,
    ...BollywoodMovies.movies, // .movies because it's an object
  ];
  const filteredMovies = allMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddToWatchlist = async (movie) => {
    try {
      const token = localStorage.getItem("userToken");

      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/add`,
        {
          id: movie.id || movie.name, // fallback to name if id not present
          title: movie.name,
          poster: movie.poster || "", // optional poster
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token
          },
        }
      );

      toast({
        title: "Movie successfully added to your watchlist",
        position: "bottom",
        status: "success",
        isClosable: true,
        duration: "5000",
      });
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      toast({
        title: "An error occured while adding this to list",
        position: "bottom",
        status: "error",
        isClosable: true,
        duration: "5000",
      });
    }
  };

  return (
    <div className="homepage">
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Search Results */}
      {searchTerm && (
        <Container maxW="container.md" mt={5}>
          <Text fontSize="2xl" mb={4}>
            Search Results:
          </Text>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <Box
                key={index}
                p={4}
                mb={4}
                border="1px solid white"
                borderRadius="md"
              >
                <div style={{ display: "flex" }}>
                  <Image
                    src={movie.poster}
                    alt={movie.name}
                    borderRadius="md"
                    mb={3}
                    objectFit="cover"
                    width="40%"
                    maxH="300px"
                    padding="10px"
                  />

                  <Text mt={2} fontSize="20px">
                    {movie.description}
                  </Text>
                </div>

                <Text fontSize="xl" fontWeight="bold">
                  {movie.name}
                </Text>
                <Text>
                  📅 {movie.year} | ⭐ {movie.rating}
                </Text>
                <button
                  style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#3182CE",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleAddToWatchlist(movie)}
                >
                  Add to Watchlist
                </button>
              </Box>
            ))
          ) : (
            <Text>No results found for "{searchTerm}"</Text>
          )}
        </Container>
      )}

      <>
        {/* Trending Movies */}
        {!searchTerm && (
          <>
            <Trending handleAddToWatchlist={handleAddToWatchlist} />

            <Bollywood handleAddToWatchlist={handleAddToWatchlist} />
            <Footer />
          </>
        )}
      </>
    </div>
  );
};

export default Home;
