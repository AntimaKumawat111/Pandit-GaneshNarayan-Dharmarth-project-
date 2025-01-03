import React from "react";
import AboutComponentCss from "./aboutComponent.module.css";

function AboutComponent({ name, about }) {
  return (
    <>
      <div className={AboutComponentCss.container}>
        <div className={AboutComponentCss.box}>
          <img
            src={
              "https://t3.ftcdn.net/jpg/06/78/09/78/360_F_678097876_9kJnFlRYGAeibsVxspqtCL9UR8giLAvF.jpg"
            }
            alt="temp"
            id={AboutComponentCss.temp_img}
          />
          <h2 className={AboutComponentCss.name}>{name}</h2>
          <p className={AboutComponentCss.about}>{about}</p>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
