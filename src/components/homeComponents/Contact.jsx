import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formDataSend = new FormData();

      formDataSend.append('name', values.name);
      formDataSend.append('email', values.email);
      formDataSend.append('message', values.message);

      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwIrf3Z1oLRjVwSQPyXRuYC52T5kp3sRo6IuDMw20C64boxhDxvRNANoQWgX6V3zxpz/exec',
          {
            method: 'POST',
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
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error:', error);
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
    <div className="bg-[#0d0d2b] min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold mb-4">Get in touch with us</h1>
        <p className="text-gray-400 text-center mb-8">
          We invite you to contact us for further assistance.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <img
            src=""
            alt="Placeholder"
            className="rounded-lg shadow-lg mb-4"
          />
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
              className={`p-3 rounded-lg border ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring focus:ring-blue-500 w-full`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email here"
              className={`p-3 rounded-lg border ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring focus:ring-blue-500 w-full`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message here"
              className={`p-3 rounded-lg border ${
                formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring focus:ring-blue-500 h-32 w-full`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl mt-10 text-center text-gray-400">
        <p>&copy; All Rights Reserved. ADOTZEE</p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-600 p-2 rounded-full shadow-md hover:bg-blue-700 transition">
          <i className="fab fa-facebook text-white"></i>
        </button>
        <button className="bg-blue-500 p-2 rounded-full shadow-md hover:bg-blue-600 transition">
          <i className="fab fa-twitter text-white"></i>
        </button>
        <button className="bg-blue-700 p-2 rounded-full shadow-md hover:bg-blue-800 transition">
          <i className="fab fa-linkedin text-white"></i>
        </button>
      </div>
    </div>
  );
}
