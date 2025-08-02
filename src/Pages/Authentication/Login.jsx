import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import axios from 'axios';
const Login = () => {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate=useNavigate()

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please enter all the fiedls",
        status: 'warning',
        isClosable: true,
        duration: 5000,
        position:'bottom',
      })
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/login`,
        {
          email,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Save token separately
      localStorage.setItem("userToken", data.token);

      // ✅ Now this will not be null
      console.log(localStorage.getItem("userToken"));

      toast({
        title: "Login successfull",
        status: "success",
        isClosable: true,
        position: "bottom",
        duration:5000
      })
localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      navigate('/home');
      
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
 setLoading(false);
      // console.log(error)
      
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <div className="starting-background">
        <div className="background-overlay2">
          <div className="login-container">
            <div style={{ display: "flex", justifyContent:'flex-start' ,width:'100%',gap: '70px' }}>
              <Link to={"/"} >
                <FaArrowLeft />
              </Link>
              <h1
                style={{
                  fontSize: "30px",
                  fontFamily: "fantasy",
                  letterSpacing: "2px",
                }}
              >
                Welcome Back
              </h1>
            </div>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)} />
              <FormLabel>Password</FormLabel>
              <Input onChange={(e)=>setPassword(e.target.value)} type="password"  />
              <button onClick={submitHandler}  >Login</button>
            </FormControl>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to={"/register"} style={{ margin: "12px" }}>
                Don't have an account
              </Link>
              <Link to={"/reset-password"} style={{ margin: "12px" }}>
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
