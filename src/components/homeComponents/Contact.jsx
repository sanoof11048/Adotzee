import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formDataSend = new FormData();

      formDataSend.append("name", values.name);
      formDataSend.append("email", values.email);
      formDataSend.append("message", values.message);

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwIrf3Z1oLRjVwSQPyXRuYC52T5kp3sRo6IuDMw20C64boxhDxvRNANoQWgX6V3zxpz/exec",
          {
            method: "POST",
            body: formDataSend,
          }
        );

        if (response.ok) {
          Swal.fire({
            title: "Success!",
            text: "Form submitted successfully",
            icon: "success",
            confirmButtonText: "OK",
            timer: 2000,
          });
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong while submitting the form. Please try again later.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
  });

  return (
    <div
      id="contact"
      className="bg-[#0d0d2b] min-h-screen flex flex-col items-center py-10"
    >
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold mb-4">
          Get in touch with us
        </h1>
        <p className="text-gray-400 text-center mb-8">
          We invite you to contact us for further assistance.
        </p>
      </div>

      <div 
      style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2019/08/30/06/03/telephone-4440525_1280.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      
      className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          {/* <img src="https://cdn.pixabay.com/photo/2019/08/30/06/03/telephone-4440525_1280.jpg" alt="Placeholder" className="rounded-lg shadow-lg mb-4 w-full" /> */}
        </div>

        <form
        
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            formik.handleSubmit();
          }}
          className="w-full md:w-1/2 flex flex-col space-y-4 p-4"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              className={`p-3 rounded-lg border-0 bg-gray-2 focus:ring-none focus:outline-none w-full`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-xs font-semibold">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email here"
              className={`p-3 rounded-lg border-0 focus:ring-none bg-gray-2  focus:outline-none w-full`}

              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs font-semibold">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message here"
              className={`p-3 rounded-lg border-0 focus:ring-none bg-gray-2  focus:outline-none w-full h-32`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-xs font-semibold">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none transition"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl mt-10 text-center text-gray-400">
        <p>&copy; All Rights Reserved. ADOTZEE</p>
      </div>

      <div className="flex space-x-3 mt-4">
        <div className="group flex  bg-blue-600 rounded-full p-2 items-center  shadow-md hover:bg-blue-700 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32">
          <i className="fab fa-facebook text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </div>

        <div className="group flex items-center bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32">
          <i className="fab fa-instagram text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </div>

        <div className="group flex items-center bg-blue-600 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32">
          <i className="fa-brands fa-whatsapp text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
}
