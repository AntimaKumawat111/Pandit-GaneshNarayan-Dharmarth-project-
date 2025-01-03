import React from "react";
import CarauselCss from "./carausel.module.css";

const Carausel = () => {
  const images = [
    "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/12/Pictures/_55ee9026-d4c2-11e9-bf18-74205beb354d.jpg",
    "http://i.huffpost.com/gen/788818/images/o-ELDER-CARE-MILITARY-facebook.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/18/17/istock-1127566187.jpg",
    "https://www.customtruck.com/wp-content/uploads/2020/06/shutterstock_1265319334-scaled.jpg",
    "https://images.ctfassets.net/3s5io6mnxfqz/1MH5olQ7SIFH2VDZPUo1Dw/55860d43a92da1e036572255f1ffcde8/AdobeStock_196719611.jpeg?w=1920",
  ];

  return (
    <div className={CarauselCss.container}>
      <div className={CarauselCss.carousel}>
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index + 1}`}
            className={CarauselCss.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Carausel;
