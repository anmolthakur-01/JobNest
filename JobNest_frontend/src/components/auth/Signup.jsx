import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          action=""
          className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label className="p-2">Full Name</Label>
            <Input type="text" placeholder="Enter your full name" />
          </div>
          <div className="my-2">
            <Label className="p-2">Email</Label>
            <Input type="text" placeholder="Example@abc.com" />
          </div>
          <div className="my-2">
            <Label className="p-2">Phone Number</Label>
            <Input type="text" placeholder="+91 12345 56789" />
          </div>
          <div className="my-2">
            <Label className="p-2">Password</Label>
            <Input type="password" placeholder="Enter password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <Input
                type="radio"
                name="role"
                value="student"
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-2 cursor-pointer">
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
