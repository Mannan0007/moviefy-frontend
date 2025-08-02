import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Box, Text, Heading, Image, Input,FormLabel, Button,useDisclosure } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link,useNavigate } from "react-router-dom";
import profile from "../assets/avatar.png";
import { MdEdit } from "react-icons/md";
import UpdateProfile from "./UpdateProfile";
import Favourites from "./Favourites";
import Footer from "./Footer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

const handleLogout = () => {
  const confirmLogout = window.confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");

    navigate("/login");
  }
  };
  


  


 
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      const decodedToken = jwtDecode(parsedUser.token);
      setUser({
        email: parsedUser.email,
        username: parsedUser.username, // from localStorage (NOT token)
        dateofbirth:parsedUser.dob
      });
    }
  }, []);

  return (
    <>
      {user ? (
        <div>
          <Link to={"/home"}>
            <Button style={{ margin: "10px" }}>
              <IoMdArrowRoundBack />
            </Button>
          </Link>
          <Button
            style={{ position: "absolute", right: "1px", margin: "10px" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Box></Box>
      )}
      <Box p={6} textAlign="center">
        {user ? (
          <>
            <div style={{ display: "flex" }}>
              <Image src={profile} style={{ height: "20pc" }} />

              <Box
                style={{
                  display: "flex",

                  width: "70%",
                  alignItems: "center",
                  fontFamily: "monospace",
                  padding: "10px",
                  gap: "50px",
                }}
              >
                <div></div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    style={{ width: "100%", background: "lightgrey" }}
                    value={user.email}
                    readOnly
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormLabel>username</FormLabel>
                  <Input
                    style={{ width: "100%", background: "lightgrey" }}
                    value={user.username}
                    readOnly
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormLabel>Date of birth</FormLabel>
                  <Input
                    style={{ width: "100%", background: "lightgrey" }}
                    value={user.dateofbirth}
                    readOnly
                  />
                </div>
                <MdEdit style={{ fontSize: "30px" }} onClick={onOpen} />
                <UpdateProfile isOpen={isOpen} onClose={onClose} />
              </Box>
            </div>

            <Box
              style={{
                margin: "10px",
                display: "flex",
                gap: "80px",
                justifyContent: "center",
              }}
            >
              <div>
                <FormLabel>Number of Movies watched</FormLabel>
                <Input
                  style={{ width: "60%", background: "lightgrey" }}
                  readOnly
                />
              </div>
              <div>
                <FormLabel>Time spent </FormLabel>
                <Input
                  style={{ width: "60%", background: "lightgrey" }}
                  readOnly
                />
              </div>
              <div>
                <FormLabel>Favourite Genre </FormLabel>
                <Input
                  style={{ width: "60%", background: "lightgrey" }}
                  readOnly
                />
              </div>
            </Box>

            <div style={{ fontSize: "20px", margin: "6pc" }}>
              <Text>Favourites</Text>
              <div>
                <Favourites/>
              </div>
            </div>
          </>
        ) : (
          <Text>Loading user info...</Text>
        )}
      </Box>
      <Footer/> 
    </>
  );
};

export default Profile;
