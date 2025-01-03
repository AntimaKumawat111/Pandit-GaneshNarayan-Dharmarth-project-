import React from "react";
// import DonationCss from "./donation_compnies.modules.css";
import DonationCss from "./donationCompnies.module.css";

function DonationCompines() {
  return (
    <>
      <div className={DonationCss.container}>
        <h3 id={DonationCss.heading} >Donation compines</h3>
        <h1 id={DonationCss.heading2}>Our partners</h1>
        <div className={DonationCss.images_box}>
            <img src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png" alt="ngo " style={{width:"200px", height:"180px",marginBottom:"1%"}}/>
            <img src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png" alt="ngo " style={{width:"200px", height:"180px",marginBottom:"1%"}}/>
            <img src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png" alt="ngo " style={{width:"200px", height:"180px",marginBottom:"1%"}}/>
            <img src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png" alt="ngo " style={{width:"200px", height:"180px",marginBottom:"1%"}}/>
        </div>

      </div>
    </>
  );
}

export default DonationCompines;

