import { Instagram, Mail, MessageCircle, MoveRight } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

function ContactSection() {
  const [btnLoading, setBtnLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnLoading(true);

    emailjs
      .sendForm("service_402u0ab", "template_ep2f3xx", form.current, {
        publicKey: "LU3mKBmmkSJ1Vdh3F",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent Successfully 🎉");
          e.target.reset();
          setBtnLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setBtnLoading(false);
        }
      );
  };
  return (
    <div className="relative mt-20 min-h-[800px]" id="contact">
      <div className="text-center mt-10 lg:mt-20">
        <p className="text-neutral-400 text-lg md:text-xl lg:text-2xl">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide mt-3">
          Contact Me
        </h2>
      </div>
      <div className="flex w-full flex-wrap mt-10 ">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl text-orange-500">Talk to me</h2>
          <div className="px-4 py-3 border rounded-md mt-4 flex flex-col items-center space-y-3 w-[280px]">
            <Mail className="text-green-400" />
            <p className="font-semibold">Mail</p>
            <p className="text-neutral-400">smijosaji.2@gmail.com</p>
            <a
              target="blank"
              href="mailto:smijosaji.2@gmail.com"
              className="flex text-neutral-400 text-sm hover:ml-2 transition-all duration-300 cursor-pointer items-center"
            >
              <p>Write Me</p>
              <MoveRight className="ml-2" />
            </a>
          </div>
          <div className="px-4 py-3 border rounded-md mt-4 flex flex-col items-center space-y-3 w-[280px]">
            <MessageCircle className="text-green-400" />
            <p className="font-semibold">WhatsApp</p>
            <p className="text-neutral-400">9645211753</p>
            <a
              target="blank"
              href="https://wa.me/+919645211753"
              className="flex text-neutral-400 text-sm hover:ml-2 transition-all duration-300 cursor-pointer items-center"
            >
              <p>Write Me</p>
              <MoveRight className="ml-2" />
            </a>
          </div>
          <div className="px-4 py-3 border rounded-md mt-4 flex flex-col items-center space-y-3 w-[280px]">
            <Instagram className="text-green-400" />
            <p className="font-semibold">Instagram</p>
            <p className="text-neutral-400">Smijo Saji</p>
            <a
              target="blank"
              href="https://instagram.com/direct/t/smijo_saji"
              className="flex text-neutral-400 text-sm hover:ml-2 transition-all duration-300 cursor-pointer items-center"
            >
              <p>Write Me</p>
              <MoveRight className="ml-2" />
            </a>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 flex flex-col items-center "
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl text-orange-500 mb-5  mt-10 lg:mt-0">
            Write me a message
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 w-full max-w-md px-4  h-full flex flex-col justify-center "
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="peer h-10 w-full border-b-2 border-neutral-700 text-neutral-50 mt-3 placeholder-transparent focus:outline-none focus:border-orange-500 bg-transparent"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm"
              >
                Name <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="peer h-10 w-full border-b-2 border-neutral-700 text-neutral-50 mt-3 placeholder-transparent focus:outline-none focus:border-orange-500 bg-transparent"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm"
              >
                Email <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="peer h-32 w-full border-b-2 border-neutral-700 text-neutral-50 mt-3 placeholder-transparent focus:outline-none focus:border-orange-500 bg-transparent"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm"
              >
                Message <span className="text-red-600">*</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md transition-all duration-300 hover:bg-orange-600"
            >
              {btnLoading ? "Please Wait.." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ContactSection;
