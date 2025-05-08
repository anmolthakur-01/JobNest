import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { SEEKER_API_URL } from "../../utils/constants";

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  // const { loading,user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const changeEventHandler = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${SEEKER_API_URL}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        // dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    // finally {
    //     dispatch(setLoading(false));
    // }
  };
  // useEffect(()=>{
  //     if(user){
  //         navigate("/");
  //     }
  // },[])

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [role, setRole] = useState();

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(`${SEEKER_API_URL}/login`, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });
  //     if (res.data.message) {
  //       Toaster.success(res.data.message);
  //       navigate("/");
  //     } else {
  //       Toaster.error("Login failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.log("There was an error!", error);
  //     Toaster.error(error.response.data.message);
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label className="p-2">Email</Label>
            <Input
              type="text"
              onChange={changeEventHandler}
              placeholder="Example@abc.com"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Password</Label>
            <Input
              type="password"
              onChange={changeEventHandler}
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <Input
                type="radio"
                value="jobseeker"
                checked={input.role === "jobseeker"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-2 cursor-pointer">
                <Label htmlFor="option-one">JobSeeker</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Input
                  type="radio"
                  value="employer"
                  checked={input.role === "employer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Employer</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <span className="text-sm">
            Don't have an account?{" "}
            <Link className="text-blue-700 " to="/signup">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
