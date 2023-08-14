import React, { useState } from "react";
import styles from "./style";
import { client } from "../client";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    let hasErrors = false;
    const newErrors = {
      name: false,
      email: false,
      message: false,
    };

    if (name.trim() === "") {
      newErrors.name = true;
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = true;
      hasErrors = true;
    }

    if (message.trim() === "") {
      newErrors.message = true;
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.paddingY}  max-w-[1100px] m-auto`}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {isFormSubmitted ? (
          <motion.div
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col ${styles.paddingY} w-full justify-center max-w-lg`}
          >
            <h4 className={`text-dimWhite text-[28px] text-center py-6`}>
              Thank you for getting in touch!
            </h4>
            <div
              className="flex flex-wrap justify-center -mx-3 mb-2"
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  message: "",
                });
                setIsFormSubmitted(false);
              }}
            >
              <button className={`${styles.secondaryBtn}`}>
                Submit Another Message
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`${styles.heading2}`}
            >
              Contact Us
            </motion.h2>
            <form
              className={`flex flex-col ${styles.paddingY} w-full justify-center max-w-lg`}
            >
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <motion.input
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`appearance-none block w-full bg-primary/[0.05] text-primary/80 placeholder-primary/60 rounded py-3 px-4 mb-3 border border-primary/10 leading-tight focus:outline-none focus:bg-primary/5 ${errors.name ? "border-red-500" : ""
                      }`}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.formName}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <motion.input
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`appearance-none block w-full bg-primary/[0.05] text-primary placeholder-primary/60 rounded py-3 px-4 mb-3 border border-primary/10 leading-tight focus:outline-none focus:bg-primary/5 ${errors.email ? "border-red-500" : ""
                      }`}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <motion.textarea
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`appearance-none block w-full bg-primary/[0.05] text-primary placeholder-primary/60 rounded py-3 px-4 mb-3 border border-primary/10 leading-tight focus:outline-none focus:bg-primary/5 h-[170px] ${errors.message ? "border-red-500" : ""
                      }`}
                    id="grid-password"
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap justify-center -mx-3 mb-2">
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`${styles.secondaryBtn}`}
                  onClick={handleFormSubmit}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;