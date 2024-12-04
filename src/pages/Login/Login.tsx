import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../utility/Validate.js";
import { ToastContainer, toast } from "react-toastify";
import { userInfo } from "../../utility/login-info.js";
import { useDispatch } from "react-redux";
import { loggedInfo } from "../../redux/Slices/AuthSlice.js";
import { LoginResponse, FormikValues } from "../../utility/interface.js";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Define the formik instance with types
  const formik = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        // Check user information
        const res = checkLogin(values);

        // Success
        if (res.sts === 1) {
          // Store data in local storage and navigate
          dispatch(loggedInfo(res.data));
          nav("/");
          toast.success("Login successful! Welcome back!");
          resetForm();
          return;
        }

        // Failure
        toast.error(
          "Login failed! Please check your email and password and try again."
        );
      } catch (error) {
        toast.error("Error occurred!");
      }
    },
  });

  // Check user auth
  const checkLogin = (info: FormikValues): LoginResponse => {
    const { email, password } = info;
    const foundUser = userInfo.find(
      (val: any) => val.email === email && val.password === password
    );

    if (foundUser) {
      return { data: foundUser, sts: 1 };
    }
    return { data: {}, sts: 0 };
  };

  return (
    <div className="flex flex-row gap-2">
      <img
        src="/images/login-img.svg"
        alt="login"
        className="h-screen hidden lg:block"
      />
      <div className="flex flex-col my-16 md:my-28 mx-auto lg:mx-auto">
        <h2 className="text-4xl font-bold">Welcome 👋</h2>
        <p className="text-brand-bg-main">Please login here</p>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <span className="mt-4">Email Address</span>
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
            placeholder="Password"
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
            <Link to={"/signup"}>
              <span className="cursor-pointer hover:underline hover:text-zinc-900">
                Don't have an account?
              </span>
            </Link>
          </div>
          <button
            className="bg-black text-white py-2 rounded-xl mt-4 hover:bg-zinc-900"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
