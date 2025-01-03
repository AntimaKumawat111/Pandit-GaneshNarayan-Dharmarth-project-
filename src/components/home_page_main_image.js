import React from "react";
import ImageCss from "./home_page_main_image.module.css";

const Photo = () => {
  return (
    <div className={ImageCss.image_box}>
      <img
        src={"/images/saveChildren.jpg"}
        alt="children"
        id={ImageCss.save_children_Img}
      />
      <img
        src={"/images/yellow_layer.jpg"}
        alt="yellowLayer"
        id={ImageCss.yellow_layer_Img}
      />

      <div className={ImageCss.top_box}>
        <h1 id={ImageCss.welcome}>WELCOME</h1>
        <h2>
          'आपका और हमारा प्रयास ला सकता है किसी के जीवन में सकारात्मक बदलाव।'
        </h2>
        <h3>
          जरूरतमंद व्‍यक्ति की सेवा करना ईश्‍वर की सेवा करने के समान है। 80G &
          12A @ CSR approved
        </h3>
      <button id={ImageCss.donate_btn}>DONATE NOW</button>
      </div>
    </div>
  );
};

export default Photo;
