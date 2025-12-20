import React from "react";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [closeError, setCloseError] = useState(false);
  const [closeSuccess, setCloseSuccess] = useState(false);
  const formRef = useRef(null);

  const handleForm = async (e) => {
    e.preventDefault();
    const serviceId = "service_vzqkjpl";
    const templeId = "template_g2z8bon";
    const key = "TzGJNJajlGAVwRsVj";

    try {
      await emailjs.sendForm(serviceId, templeId, formRef.current, {
        publicKey: key,
      });
      console.log("Email sent successfully");
      setSuccess("Email sent successfully");
      formRef.current.reset();
    } catch (err) {
      console.log("Error while sending message", err);
      setError("Please try again");
    }
  };

  return (
    <div className="w-full text-white p-8" id="contact">
      <div className="w-full flex justify-center items-center">
        <form
          action=""
          className="w-full flex flex-col justify-center items-center gap-8 md:p-10"
          onSubmit={handleForm}
          ref={formRef}
        >
          <h1 className="mask-b-from-10%">Get in Touch!</h1>
          <div
            className="w-full relative flex items-center  justify-between py-8"
            id="field-wrapper"
          >
            <div className=" w-[30%] relative flex flex-col" id="name-field">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder=" "
                className="w-full peer outline-none border-b border-gray-400 py-1 placeholder-transparent text-xs focus:border-blue-400 transition-all duration-400 capitalize"
              />
              <label
                htmlFor="name"
                className="absolute -top-8 text-[9px] left-0 text-blue-400 peer-placeholder-shown:text-xs peer-placeholder-shown:top-1 peer-placeholder-shown:left-0 peer-placeholder-shown:text-[#ADADAD] transition-all duration-500 peer-focus:-top-8 peer-focus:lef-0 peer-focus:text-blue-400 peer-focus:text-[9px]"
              >
                Name:
              </label>
            </div>
            <div className="relative w-[30%] flex flex-col" id="email-field">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder=""
                className="outline-none w-full peer border-b text-xs border-gray-400 py-1 placeholder-transparent focus:border-blue-400 transition-all duration-400"
              />
              <label
                htmlFor="email"
                className="absolute -top-8 text-[9px] left-0 text-blue-400 peer-placeholder-shown:text-xs peer-placeholder-shown:top-1 peer-placeholder-shown:left-0 peer-placeholder-shown:text-[#ADADAD] transition-all duration-500 peer-focus:-top-8 peer-focus:lef-0 peer-focus:text-blue-400 peer-focus:text-[9px]"
              >
                Email:
              </label>
            </div>
          </div>
          <div
            className="relative w-full flex flex-col justify-center items-center"
            id="message-wrapper"
          >
            <textarea
              name="message"
              id="message"
              placeholder="message"
              required
              className=" w-full h-8 outline-none border-b  border-gray-400 text-xs peer placeholder-transparent focus:border-blue-400 transition-all duration-500 resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute  top-1 text-blue-400 peer-placeholder-shown:text-[#ADADAD]  transition-all peer-focus:-translate-y-10 peer-focus:scale-70  duration-500 peer-focus:text-blue-400"
            >
              Message
            </label>
          </div>
          <button className="relative px-6 py-1 border border-black bg-white mask-b-from-40% sm:bg-transparent sm:border-transparent  overflow-hidden group cursor-pointer rounded-md text-xs font-bold tracking-normal transition-all active:scale-65 duration-500">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white   transition-transform duration-400 rounded-md"></span>
            <span className="relative z-10 text-blue-500 transition-colors duration-400  capitalize text-xs">
              send
            </span>
          </button>
        </form>
      </div>
      {/* Error Message  */}
      {error && !closeError && (
        <div className="fixed flex justify-center items-center inset-0 bg-black/70 backdrop-blur-xl">
          <div className="flex flex-col bg-white/20 h-36 w-52 justify-center items-center p-4 gap-4 rounded-sm border border-zinc-600">
            <h1>{error}</h1>
            <button
              className="bg-red-600 px-4 py-1 text-xs rounded-sm cursor-pointer active:scale-[0.7] hover:bg-red-800 transition-all duration-300 active:border font-bold"
              onClick={() => setCloseError(!closeError)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {/* Success Message */}
      {success && !closeSuccess && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-lg">
          <div className="flex flex-col bg-white/10 h-36 justify-center items-center p-4 gap-4 rounded-sm border border-zinc-600">
            <h1>{success}</h1>
            <button
              className="bg-red-600 px-4 py-1 text-xs rounded-sm cursor-pointer active:scale-[0.7] hover:bg-red-800 transition-all duration-300 active:border font-bold"
              onClick={() => setCloseSuccess(!closeSuccess)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
