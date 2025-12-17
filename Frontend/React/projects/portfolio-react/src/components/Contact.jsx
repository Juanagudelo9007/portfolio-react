import React from "react";

const Contact = () => {
  return (
    <div className="w-full text-white p-8">
      <div className="w-full flex justify-center items-center">
        <form
          action=""
          className="w-full flex flex-col justify-center items-center gap-8 md:p-10"
        >
          <h1>Get in Touch!</h1>
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
                className="w-full peer outline-none border-b border-gray-400 py-1 placeholder-transparent text-xs focus:border-blue-400 transition-all duration-400"
              />
              <label
                htmlFor="name"
                className="absolute -top-6 left-0 text-xs text-blue-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 peer-placeholder-shown:text-[#ADADAD] transition-all duration-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-400"
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
                className="absolute -top-8 text-xs left-0 text-blue-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1  peer-placeholder-shown:left-0 peer-placeholder-shown:text-[#ADADAD] transition-all duration-400 peer-focus:-top-8 peer-focus:lef-0 peer-focus:text-blue-400 peer-focus:text-xs"
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
              required
              className=" w-full outline-none border-b border-gray-400 text-xs leading-tight"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
