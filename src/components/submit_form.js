import React, { useState } from "react";
import SubmitFormCss from "./submit_form.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(submitted);
    e.preventDefault();
    setSubmitted(true);
    alert(" Your message has been sent successfully!")
  };

  return (
    <>
      <div className={SubmitFormCss.container}>
        <h2 id={SubmitFormCss.heading}>partinership</h2>

      <div className={SubmitFormCss.paragraph_box}>

        <h3 id={SubmitFormCss.get_in_heading}>get in touch with us</h3>
        <p id={SubmitFormCss.paragraph}>
          {" "}
          We bring in 100% transparency in giving with our in-kind donations
          model. With us, you can support the most pressing causes across the
          country and impact thousands of lives. If your company or foundation
          is looking to make a difference today, we’re here to partner with you.{" "}
        </p>
      </div>
        <form onSubmit={handleSubmit} className={SubmitFormCss.form}>
        <h3 id={SubmitFormCss.paragraph}>
          Write to us with your organisation details and we will get in touch
          with you link
          https://kutumb.app/e5aaf20006f8?ref=ZT8JB&screen=star_share
        </h3>
          <label>
            <h2>Name::</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={SubmitFormCss.input}
              required
            />
          </label>
          <label>
            <h2>Email :</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={SubmitFormCss.input}
              required
            />
          </label>
          <label>
            <h2>Message :</h2>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              id={SubmitFormCss.textarea}
              required
            />
          </label>
          <button type="submit" id={SubmitFormCss.submit_btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
