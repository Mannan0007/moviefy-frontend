import { Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

const AboutUs = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        position: "relative",
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          margin: "2pc",
          color: "white",
        }}
      >
        <Text style={{ fontSize: "20px" }}>
          <h2 style={{ fontSize: "25px", marginBottom: "10px" }}>
            Welcome to Moviefy
          </h2>
          Your ultimate destination for discovering and managing your favorite
          movies! Whether you're a casual viewer or a hardcore cinephile, we
          make it easy to explore, track, and organize movies in one place.
          <br />
          <h2 style={{ fontSize: "25px", margin: "10px" }}>
            Our Mission{" "}
          </h2>
          At Moviefy, we believe that movies are more than just
          entertainment—they are experiences, emotions, and stories that connect
          people across the world. Our goal is to simplify movie discovery while
          offering an intuitive platform where users can create watchlists, rate
          movies, and stay updated with the latest releases.
        </Text>
      </div>
    </div>
  );
};
export default AboutUs;
