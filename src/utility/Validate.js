import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export const singupValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

// product propertise validate befor adding cart
export const checkProduct = (color, size, qty) => {
  if (color == 0) {
    return { msg: "Please, select color you need.", sts: 0 };
  }
  if (qty == 0) {
    return { msg: "Please, select qty you need.", sts: 0 };
  }
  if (size == 0) {
    return { msg: "Please, select size you need.", sts: 0 };
  }
  return { msg: "", sts: 1 };
};
