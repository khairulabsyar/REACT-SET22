import { Button, Paper, Slide, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import LoginIcon from "@mui/icons-material/Login";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(5, "Name should be of minimum 5 characters length")
    .required("Name is required"),
  phone: yup
    .number("Enter your phone number")
    .min(10, "Phone number should be of minimum 10 characters length")
    .required("Phone number is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup
    .string("Enter your message")
    .min(15, "Message should be of minimum 15 characters length")
    .required("Message is required"),
});

const MyButton = React.forwardRef((props, ref) => (
  <div role="button" {...props} ref={ref} />
));

const TailWind = () => {
  const [checked, setChecked] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const icon = (
    <Paper
      sx={{
        m: 1,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <h1 className=" text-lime-800">Contact Us</h1>
      <h3>Please do not hesitate to contact me shold you have any questions</h3>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <label>Name</label>
        <TextField
          fullWidth
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <label>Phone</label>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          type="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <label>Email</label>
        <TextField
          fullWidth
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          inputProps={{ maxLength: 200 }}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <label>Message</label>
        <TextField
          fullWidth
          id="message"
          name="message"
          type="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={
            formik.touched.message && formik.errors.message
              ? formik.touched.message && formik.errors.message
              : `${formik.values.message.length}/100`
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex items-center justify-between h-12 top-0 md:bg-red-500  bg-orange-500 px-5">
          <div className="hidden md:block">
            <Button
              variant="contained"
              component={MyButton}
              checked={checked}
              onClick={handleChange}
            >
              Sign In
            </Button>
          </div>
          <div className=" md:hidden absolute top-1 right-0 ">
            <Button
              variant="contained"
              component={MyButton}
              checked={checked}
              onClick={handleChange}
              sx={{ border: 1, borderRadius: 20 }}
            >
              <LoginIcon />
            </Button>
          </div>
        </div>

        <div className="flex flex-row justify-center bg-rose-200 h-[calc(100%_-_3rem)]">
          <div className="bg-lime-800 w-full hidden lg:block"></div>
          <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
            {icon}
          </Slide>
        </div>
      </div>
    </>
  );
};

export default TailWind;
