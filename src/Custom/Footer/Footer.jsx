import React from "react";
import "./Footer.scss";
import Quay from "../Images/Quay.svg";
import ig from "../Images/instagram.svg";
import yt from "../Images/youtube.svg";
import pt from "../Images/pinterest.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="left">
        <div className="footerLogoWrapper">
          <img src={Quay} alt="quay" className="footerLogo" />
        </div>
        <div className="leftLinks">
          <div>
            <h2>SITEMAP</h2>
            <p>About</p>
            <p>Menu</p> <p>News </p>
            <p>Gift </p>
            <p>Vouchers </p>
            <p>News Gift Vouchers </p>
            <p>Meet the Team</p>
            <h2 style={{ paddingTop: "30px" }}> SOCIAL</h2>
            <div className="socialLogoWrapper">
              <img src={ig} alt="ig" className="socialLogo" />
              <img src={pt} alt="pt" className="socialLogo" />
              <img src={yt} alt="yt" className="socialLogo" />
            </div>
          </div>
          <div>
            <h2>LOCATION </h2>
            <p>
              Upper Level,
              <br /> Overseas Passenger Terminal, <br />
              The Rocks, Sydney 2000
              <br />
              phone: 02 9251 5600
              <br />
            </p>
            <h2 style={{ paddingTop: "30px" }}>OPENING HOURS </h2>
            <p>LUNCH</p>{" "}
            <p>
              Saturday and Sunday <br />
              Bookings 12pm to 1.30pm <br />
              DINNER Thursday to Sunday <br />
              Bookings 6pm to 8.45pm
            </p>
          </div>
          <div>
            <h2 style={{ paddingBottom: "20px" }}>MAKE A RESERVATION</h2>
            <p className="reservationButton">MAKE A RESERVATION</p>
            <p style={{ paddingTop: "20px" }}>Tel : 02 9251 5600</p>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>&nbsp;</h2>
        <h2>Menu</h2> <p className="rightText">News </p>
        <p className="rightText">Gift </p>
        <p className="rightText">Vouchers </p>
        <p className="rightText">News Gift Vouchers </p>
        <p className="rightText">Meet the Team</p>
      </div>
    </div>
  );
}
