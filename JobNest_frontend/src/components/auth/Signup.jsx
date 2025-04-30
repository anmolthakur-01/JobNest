import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const nav = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  // const [role, setRole] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      // role: role,
    };
    axios.post("http://localhost:3000/api/jobseeker/add", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          nav("/login");
        } else {
          toast.error(response.data.message);
          nav("/login");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        nav("/login");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label className="p-2">Name</Label>
            <Input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your full name"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Email</Label>
            <Input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Example@abc.com"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Phone Number</Label>
            <Input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="12345 56789"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Password</Label>
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <Input
                type="radio"
                // checked={role === "jobseeker"}
                // onChange={
                //   (changeRole = (e) => {
                //     setRole(e.target.value);
                //   })
                // }
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-2 cursor-pointer">
                <Label htmlFor="option-one">JobSeeker</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Input
                  type="radio"
                  // checked={role === "employer"}
                  // onChange={
                  //   (changeEmployer = (e) => {
                  //     setEmployer(e.target.value);
                  //   })
                  // }
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Employer</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4">
            Sign Up
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link className="text-blue-700 " to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
