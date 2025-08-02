import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

const ContactUs = () => {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "1pc",
          borderRadius: "10px",
        }}
      >
        <FormControl isRequired style={{ padding: "1pc" }}>
          <FormLabel style={{ color: "white" }}>Your email</FormLabel>
          <Input placeholder="email" style={{ color: "white" }} type="email" />
          <FormLabel style={{ color: "white" }}>
            Please enter your Query
          </FormLabel>
          <Textarea style={{ height: "15pc", color: "white" }} />
        </FormControl>
      </Box>
      <Button style={{ display: "block", margin: "auto" }}>Send</Button>
    </div>
  );
};

export default ContactUs;
