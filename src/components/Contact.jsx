import React, { useState } from "react";
import styles from "./style";
import { client } from "../client";
import { motion } from "framer-motion";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
        <motion.h2
          whileInView={{ y: [-40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={`${styles.heading2}`}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        {isFormSubmitted ? (
          <motion.div
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col ${styles.paddingY} w-full justify-center max-w-lg`}
          >
            <h4 className={`${styles.heading4} text-primary text-center py-6`}>
              Thank you for getting in touch!
            </h4>
            <div className="flex flex-wrap justify-center -mx-3 mb-2">
              <button
                className="bg-primary/[0.1] hover:bg-primary/20 ml-10 text-dimWhite/90 font-normal py-2 px-4 border-[2px] border-primary/[0.1] rounded"
                onClick={() => {
                  setFormData({
                    name: "",
                    email: "",
                    message: "",
                  });
                  setIsFormSubmitted(false);
                }}
              >
                Submit Another Message
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col ${styles.paddingY} w-full justify-center max-w-lg`}
          >
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-primary/[0.05] text-primary/80 placeholder-primary/60 rounded py-3 px-4 mb-3 border border-primary/10 leading-tight focus:outline-none focus:bg-primary/5"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.formName}
                  onChange={handleInputChange}
                />
                <p className="text-red-500 text-xs italic opacity-0">
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-primary/[0.05] text-primary placeholder-primary/60 rounded py-3 px-4 mb-3 border border-primary/10 leading-tight focus:outline-none focus:bg-primary/5"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <p className="text-red-500 text-xs italic opacity-0">
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <textarea
                  className="appearance-none block w-full bg-primary/[0.05] text-primary placeholder-primary/60 rounded py-3 px-4 mb-3 border border-primary/10 leading-tight focus:outline-none focus:bg-primary/5 h-[170px]"
                  id="grid-password"
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <p className="text-red-500 text-xs italic opacity-0">
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-3 mb-2">
              <button
                className="bg-primary hover:bg-primary/90 text-bgColor font-semiBold py-2 px-4 rounded"
                onClick={handleFormSubmit}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default contact;
