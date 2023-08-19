/* eslint-disable */
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const handleReset = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcj6uzc",
        "template_awsutwj",
        form.current,
        "e0JNSRdADNHvmh1Ex"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Mensaje enviado correctamente");
            handleReset();
          }
        },
        (error) => {
          alert("Error al enviar el mensaje" + error.text);
          handleReset();
        }
      );
  };

  return (
    <div className="h-full">
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] pb-40">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Trabajemos <span className="text-accent">juntos.</span>
          </motion.h2>
          <motion.form
            onSubmit={sendEmail}
            ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Nombre"
                className="input"
                name="user_name"
              />
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="user_email"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              className="input"
              name="user_subject"
            />
            <textarea
              placeholder="Mensaje"
              className="textarea"
              name="messaje"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
