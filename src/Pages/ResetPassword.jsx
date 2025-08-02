import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import React from "react";
const ResetPassword = () => {
  return (
    <div className="register-content ">
      <div className="puura-container">
        <div className="reg-container ">
          <FormControl isRequired>
            <FormLabel style={{ color: "white" }}>Email</FormLabel>
            <Box
              style={{
                display: "flex",
                gap: "1pc",
                justifyContent: "space-between",
                alignItems: "center",
                              paddingBottom: "10px",
                
              }}
            >
              <Input
                placeholder="Enter your email"
                style={{ color: "white" }}
              />
              <Button>Get OTP</Button>
            </Box>

            <FormLabel style={{ color: "white" }}>Enter your OTP</FormLabel>
            <Input placeholder="Enter  OTP" style={{ color: "white", }} />
          </FormControl>
          <Button style={{ marginLeft: "15pc", marginTop: "1pc" }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
