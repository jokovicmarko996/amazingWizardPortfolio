"use client";
// import React from "react";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

// ...

const container = {
  // initial hidden
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // svaki children se pojavljuje nakon .3s
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* pokupljeno sa EmailJs-a */
  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you cant send more than 1 email per 5s using this API
          },
        }
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          toast.success(
            "I have received your message, I will get back to you soon!"
          ),
            {
              id: toastId,
            };
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error(
            "There was an error sending your message, please try again later"
          ),
            {
              id: toastId,
            };
        }
      );
  };

  /* pokupljeno iz https://www.react-hook-form.com/form-builder/ */
  const onSubmit = (data) => {
    const templateParams = {
      to_name: "milos",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    // console.log(data);
    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <>
      {" "}
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          className="w-full p-2 rounded-nd shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is mandatory!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long",
            },
            maxLength: 80,
          })}
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          className="w-full p-2 rounded-nd shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="email"
          {...register("email", {
            required: "This field is mandatory!",
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder="message"
          className="w-full p-2 rounded-nd shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register("message", {
            required: "This field is mandatory!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters",
            },
          })}
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          type="submit"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        />
      </motion.form>
    </>
  );
}
