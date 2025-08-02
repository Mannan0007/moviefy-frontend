import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import "../styles/Start.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Start = () => {
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


  return (
    <>
      <div className="starting-background">
        {/* Ensure NavBar stays on top */}
        <div className="navbar-container">
          <NavBar />
        </div>

        {/* Background overlay (doesn't block clicks) */}
        <div className="background-overlay"></div>

        {/* Content (text) */}
        <div className="content">
          <Text class="text-4xl font-black">All your entertainment</Text>
          <br />
          <Text class="text-4xl font-black ">at one place</Text>
        </div>

        <div className="register-section">
          {user ? (
            <Link to={"/home"}>
              <Button id="registerbutton">Get Started</Button>
            </Link>
          ) : (
            <Link to={"/register"}>
              <Button id="registerbutton">Get Started</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Start;
