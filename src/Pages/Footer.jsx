import { Box, Container, Flex, FormLabel,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <Box
        style={{
          display: "flex",
          backgroundColor: "lightblue",
          justifyContent: "space-evenly",
          height: "10pc",
          padding: "2pc",
          color:'black'
        }}
      >
        <Link to="/aboutus">
          <FormLabel>About us</FormLabel>
        </Link>
        <Link to="/contact-us">
          <FormLabel>Contact us</FormLabel>
        </Link>
        <Link to="/privacy">
          <FormLabel>Privacy Policy</FormLabel>
        </Link>

        <a
          href="https://mannanpuri.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormLabel>About the Developer</FormLabel>
        </a>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={"20px"}
        // backgroundColor={"light"}
      >
        © 1990-2025 by Moviefy.com, Inc.
      </Text>
    </div>
  );
}

export default Footer
