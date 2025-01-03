import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Dropdown_Css from "./drop-down_questions.module.css";
const FAQ = () => {
  const faqs = [
    {
      question: "What is Pandit Ganeshvardhan dharmarth foundation question ?",
      answer:
        "PANDDIT GANESHNARAYAN DHARMARTH FOUNDATION is a charitable organization dedicated to helping those in need.",
    },
    {
      question:
        "How can i donate to Pandit Ganeshvardhan dharmarth foundation ?  ",
      answer:
        "You can donate to PANDDIT GANESHNARAYAN DHARMARTH FOUNDATION by visiting our website and clicking on the Donate button, or by sending a check to our mailing address.",
    },
    {
      question:
        " Is my donation to Pandit Ganeshvardhan dharmarth foundation tax deducteble ?",
      answer:
        "Yes, अपनी आय 12A & 80G से दानकर्ता को कुल दान की गई राशि के 50% तक आयकर छूट  प्राप्त करें PANDDIT GANESHNARAYAN DHARMARTH FOUNDATION is a registered Section 8 Licence Number 158520 ,Licence under section 8(1) of the Companies Act, 2013 , so your donation is tax deductible.  GOVERNMENT OF INDIA MINISTRY OF CORPORATE AFFAIRS Central Registration Centre Certificate of IncorporationThe Corporate Identity Number of the company is U88900RJ2024NPL095927 The Permanent Account Number (PAN) of the company is AAOCP8951C The Tax Deduction and Collection Account Number (TAN) of the company is JPRP09958E ngo darpan niti aayog registration Unique Id: RJ/2024/0442103 ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={Dropdown_Css.container}>
      <h2 id={Dropdown_Css.heading}>Frequently Asked Questions</h2>
      <h4 id={Dropdown_Css.paragraph}>
        Please reach us at{" "}
        <span>
          {" "}
          <a
            href="mailto:jeet.jitendra777@gmail.com"
            className={Dropdown_Css.ancher_tag}
          >
            jeet.jitendra777@gmail.com
          </a>
        </span>
        if you cannot find an answer to your question.{" "}
      </h4>

      <div className={Dropdown_Css.questions}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <button
              onClick={() => toggleAnswer(index)}
              className={Dropdown_Css.btn}
            >
              {faq.question}
              <ArrowDropDownIcon />
            </button>
            {openIndex === index && (
              <div className={Dropdown_Css.open_index_div}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
