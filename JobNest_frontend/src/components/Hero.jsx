import React from "react";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          Welcome to JobNest
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6a38c2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          adipisci dolorum voluptas accusamus impedit explicabo.
        </p>
        <div className="flex w-[40%] item-center mx-auto">
          <Input
            type="text"
            placeholder="Enter your job title"
            className="cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
