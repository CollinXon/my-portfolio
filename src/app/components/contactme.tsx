"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

interface FormData {
  email: string;
  message: string;
}

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Email sent successfully");
        reset(); 
      } else {
        // Handle error (e.g., show an error message)
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("An error occurred while sending the email:", error);
    }
  };

  return (
    <div
      id="contact"
      className="bg-slate-950 w-screen lg:w-full p-0 sm:p-16   "
    >
      <div className="flex flex-col  text-white text-center space-y-4 xl:space-y-8 ">
        <p className="mt-10 sm:mt-0 font-bold  text-4xl lg:text-5xl">
          Contact <span className="text-yellow-500">Me</span>{" "}
        </p>
        <p className=" p-4 sm:p-0  sm:ml-[100px] ">
          {" "}
          Below are my contact details with my address, contact number & email
          address. You can also leave a mail message for me by entering your
          email and your message in the text-box below.
        </p>
      </div>

      <div className=" flex-none xl:flex  gap-6 sm:gap-48  md:mt-8 p-10">
        <div className="space-y-8 text-nowrap pr-32 max-w-full sm:w-[350px]">
          <div className="mt-10">
            <span className="text-yellow-500">Address_ </span>{" "}
            <span className="text-white"> Lagos, Nigeria</span>
          </div>

          <div>
            <span className="text-yellow-500">Phone_ </span>{" "}
            <span className="text-white">08168848983</span>
          </div>

          <div>
            <span className="text-yellow-500 text-nowrap">Email_ </span>{" "}
            <span className="text-white">ennahcollins@gmail.com</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-10 xl:mt-0"
        >
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
            className="p-3 bg-gray-500 w-9/12 lg:w-[400px] text-white focus:outline-none rounded-sm"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <textarea
            placeholder="Message"
            {...register("message")}
            className="p-3 bg-gray-500 h-48 w-full sm:w-[585px] text-white focus:outline-none rounded-sm" 
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}

          <button type="submit" className="bg-yellow-500 p-2 w-28 rounded-md">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
