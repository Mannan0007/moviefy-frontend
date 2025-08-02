import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import "../../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [dob, setDob] = useState();
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const navigate = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!username || !email || !password || !confirmPassword || !dob) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/register`,
        {
          username,
          email,
          password,
          dob,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("userToken", data.token);

      toast({
        title: "Registartion successfull",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      setLoading(false);
      navigate("/home");
    } catch (error) {
      toast({
        title: "Error occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <div className="register-content">
      <div className="puura-container">
        <div className="reg-container">
          <FormControl isRequired>
            <FormLabel style={{ color: "white" }}>Email</FormLabel>
            <Input
              placeholder="Enter your email"
              id="registerhere"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel style={{ color: "white" }}>Username</FormLabel>
            <Input
              placeholder="Create a username"
              id="registerhere"
              onChange={(e) => setUsername(e.target.value)}
            />

            <FormLabel style={{ color: "white" }}>Create a password</FormLabel>
            <Input
              placeholder="Create your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel style={{ color: "white" }}>
              Confirm your password
            </FormLabel>
            <Input
              placeholder="Confirm your password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormLabel style={{ color: "white" }}>Date of Birth</FormLabel>
            <Input type="Date" onChange={(e) => setDob(e.target.value)} />
          </FormControl>
          <Link id="back2login" to={"/login"}>
            Already have an account?
          </Link>

          <Button style={{ marginTop: "2pc" }} onClick={submitHandler}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
