import { Button, Input, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import logo from '../assets/logo.png'
import { Link,useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import logo2 from '../assets/logo2.png'
const NavBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  let user = null;
  try {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo && userInfo !== "undefined") {
      user = JSON.parse(userInfo);
    }
  } catch (error) {
    console.error("Failed to parse userInfo:", error);
    localStorage.removeItem("userInfo"); // Clean up the corrupted data
  }

  const logoutHandler = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?")
    if (confirmLogout) { 
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");

      navigate("/login");
    }
  };

  return (
    <>
      <div class="flex  ">
        <div class="flex gap-55 text-white m-6 p-4 text-lg  ">
          {user ? (
            <>
              <div style={{ display: "flex", gap: "20px" }}>
                <Input
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  width="300px"
                  bg="white"
                  color="black"
                />
                <FaSearch style={{ fontSize: "2pc" }} />
              </div>
              {/*<img
                src={logo}
                style={{
                  height: "100px",
                }}
              />*/}

              {/*   <FaStar /> */}

              <div style={{position:'absolute',right:'9pc',gap:'1pc',display:'flex'}}>
                
                
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="solid"
                    background={"lightgreen"}
                    cursor="pointer"
                    color={"black"}
                  >
                    Genre
                  </MenuButton>
                  <MenuList style={{ color: "black" }}>
                    <MenuItem>Action</MenuItem>
                    <MenuItem>Comedy</MenuItem>
                    <MenuItem>Drama</MenuItem>
                    <MenuItem>Haunted</MenuItem>
                    <MenuItem>Romance</MenuItem>
                    <MenuItem>Thriller</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="solid"
                    background={"lightgreen"}
                    cursor="pointer"
                    color={"black"}
                  >
                    Categories
                  </MenuButton>
                  <MenuList style={{ color: "black" }}>
                    <MenuItem>Indian</MenuItem>
                    <MenuItem>Hollywood</MenuItem>
                    <MenuItem>Korean</MenuItem>
                    <MenuItem>Trending</MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <Link to={"/watch-list"}>
                <FaListCheck
                  style={{
                    position: "absolute",
                    right: "5pc",
                    fontSize: "30px",
                  }}
                />
              </Link>

              <div style={{ position: "absolute", right: "10px" }}>
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
                    <MenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                  </MenuList>
                </Menu>{" "}
              </div>
            </>
          ) : (
            <>
              <Link to={"/"}>
                <img src={logo} class="w-55 relative top-[-42px] " />
              </Link>

              <Link to={"/aboutus"}>
                <Text className="hover:cursor-pointer hover:text-green-400 h-3">
                  About Us
                </Text>
              </Link>
              <Link to={"/contact"}>
                <Text class="hover:cursor-pointer hover:text-green-400 h-3">
                  Contact Us
                </Text>
              </Link>

              <Link to={"/privacy"}>
                <Text class="hover:cursor-pointer hover:text-green-400  h-3">
                  Privacy Policy
                </Text>
              </Link>
              <Link to={"/login"}>
                <Button id="registerbutton">Log in</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;



