import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { singupValidationSchema } from "../../utility/Validate.js";
import { userInfo } from "../../utility//login-info.js";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Signup: React.FC = () => {
  //states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //validation schema
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: singupValidationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        setIsLoading(true);
        let res = addNewUser(values);
        setIsLoading(false);
        if (res) {
          return toast("New user registration successful!");
        }

        toast("Registration failed! Please try again or contact support.");
      } catch (error) {
        setIsLoading(false);
        toast("Error occured! contact support.");
      }
    },
  });

  // adodd new user
  const addNewUser = (info: object): object => {
    let id: number = userInfo[userInfo.length - 1].id;
    info.id = id + 1;
    userInfo.push(info);
    return info;
  };
  return (
    <div className="flex flex-row gap-2">
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
        onClick={() => {
          setIsLoading(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <img
        src="/images/signup-img.svg"
        alt="login"
        className="h-screen hidden lg:block"
      />
      <div className="flex flex-col my-16 md:my-16 mx-auto lg:mx-auto">
        <h2 className="text-4xl font-bold">Create New Account</h2>
        <p className="text-brand-bg-main">Please Enter Details</p>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <span className="mt-4">Name</span>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
          <span className="mt-2">Email Address</span>
          <ToastContainer theme="dark" />

          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <span className="mt-2">Password</span>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
          {/* Remember me  */}
          <div className="flxr justify-between mt-2">
            <div className="flxr gap-3">
              <input
                type="checkbox"
                className="bg-black text-black p-2 cursor-pointer border-2 border-black"
              />
              <span>Remember Me</span>
            </div>
            <Link to={"/login"}>
              <span className="cursor-pointer hover:underline hover:text-zinc-900">
                Already have an account?
              </span>
            </Link>
          </div>
          <button
            className="bg-black text-white py-2 rounded-xl mt-4 hover:bg-zinc-900"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
