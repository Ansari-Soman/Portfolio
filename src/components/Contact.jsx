import React, { useState } from "react";
import ClaudeButtons from "./ClaudeButtons";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "014d1784-0665-40b6-8898-d133c01a773c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="overflow-x-hidden w-full px-4 lg:px-8 xl:px-[12%] max-w-[1600px] container
      mx-auto py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] "
    >
      <h4
        data-aos="zoom"
        className="text-center text-lg mb-2"
        style={{ fontFamily: "Ovo" }}
      >
        Connect with me
      </h4>
      <h2
        data-aos="zoom"
        className="text-center text-5xl"
        style={{ fontFamily: "Ovo" }}
      >
        Get in touch
      </h2>
      <p
        data-aos="zoom"
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        style={{ fontFamily: "Ovo" }}
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form className="w-full " action="" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            data-aos="fade-right"
            className="flex-1 outline-none p-3 border-[0.5px] border-gray-400 rounded-md bg-gray-200"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            data-aos="fade-left"
            className="flex-1 outline-none p-3 border-[0.5px] border-gray-400 rounded-md bg-gray-200"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>

        <textarea
          data-aos="fade-up"
          className="w-full outline-none p-4 border-[0.5px] border-gray-400 rounded-md bg-gray-200 mb-6 "
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          id=""
        ></textarea>

        <button
          data-aos="fade-up"
          className=" w-full flex justify-center "
          type="submit"
        >
          <ClaudeButtons
            bgColor={"white"}
            forColor={"black"}
            buttonText={"Submit now"}
          />
          {/* <img src="/assets/right-arrow-white.png" className="w-4" alt="" /> */}
        </button>

        <p className="mt-4">{result}</p>
        {/* 014d1784-0665-40b6-8898-d133c01a773c */}
      </form>
    </div>
  );
};

export default Contact;
