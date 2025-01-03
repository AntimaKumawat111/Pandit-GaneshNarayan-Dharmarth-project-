import React, { useState } from "react";
import ContactUsCss from "./contact_us.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const branches = [
  "Alwar",
  " sikar",
  " jaipur",
  " gudha",
  "bikaner",
  " gudha",
  "bikaner",
];

const businessHours = [
  { day: "Mon", hours: "09:00 am - 05:00 pm" },
  { day: "Tue", hours: "09:00 am - 05:00 pm" },
  { day: "Wed", hours: "09:00 am - 05:00 pm" },
  { day: "Thu", hours: "09:00 am - 05:00 pm" },
  { day: "Fri", hours: "09:00 am - 05:00 pm" },
  { day: "Sat", hours: "By Appointment" },
  { day: "Sun", hours: "By Appointment" },
];

function ContactUsPage() {
  const [selectedDay, setSelectedDay] = useState("");

  function handleChange(event) {
    setSelectedDay(event.target.value);
  }

  return (
    <>
      <div className={ContactUsCss.container}>
        <h3 id={ContactUsCss.heading}>Conact us </h3>
        <h1 id={ContactUsCss.heading2}>
          PANDDIT GANESHNARAYAN DHARMARTH FOUNDATION
        </h1>
        <div className={ContactUsCss.address}>
          <h2 className={ContactUsCss.heading3}> alwar branch address</h2>
          <p id={ContactUsCss.address_paragraph}>
            interview on 17,18,19,20 sep 2024 .address is Near Ambedkar circle
            ward no.8,harsoli, road, near Arjun hospital and diagnostic center,
            Khairthal,alwar Rajasthan 301404
          </p>
        </div>

        <div className={ContactUsCss.new_braches}>
          <h2 className={ContactUsCss.heading3}>
            new branch open process on way open soon
          </h2>
          <ol className={ContactUsCss.ol_list}>
            {branches.map((branches, index) => (
              <li key={index} className={ContactUsCss.list_names}>
                {branches}{" "}
              </li>
            ))}
          </ol>
        </div>

        <div className={ContactUsCss.btn_div}>
          <button id={ContactUsCss.whatsApp_btn}>
            <WhatsAppIcon id={ContactUsCss.whatsApp_icon} />
            Message us on WhatsApp
          </button>
        </div>

        <div className={ContactUsCss.head_office}>
          <h1 id={ContactUsCss.head_office_heading}>
            PANDDIT GANESHNARAYAN DHARMARTH FOUNDATION head office
          </h1>

          <p id={ContactUsCss.head_office_paragraph}>
            First Floor, near Gahlawat Hotel, Surya Nagar, Adooka, Rajasthan
            333036
          </p>
        </div>

        <div className={ContactUsCss.hours_time_box}>
          <h3>Hours</h3>

          <div className={ContactUsCss.dropdown_div}>
            <select
              id="businessHours"
              value={selectedDay}
              onChange={handleChange}
            >
              <option value="" disabled>
                Open-time
              </option>
              {businessHours.map((entry, index) => (
                <option key={index} value={entry.day}>
                  {entry.day}: {entry.hours}
                </option>
              ))}
            </select>
          </div>
          <div className={ContactUsCss.dropUs_line_btn_div}>
            <button id={ContactUsCss.drop_line_btn}>drop us a line</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
