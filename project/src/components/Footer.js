import React from "react";
import ownerImage from "../resources/owner.png"
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="logoContainer">
        <div>
            <img
                src={ownerImage}
                alt="Restaurant owner"
                className="ownerImage"
            />
        </div>
      </div>

      <div>
        <div className="columnTitle">Navigation</div>
        <div className="columnContent">
          <span>Home</span>
          <br />
          <span>About</span>
          <br />
          <span>Menu</span>
          <br />
          <span>Reservations</span>
          <br />
          <span>Order Online</span>
          <br />
          <span>Login</span>
        </div>
      </div>

      <div>
        <div className="columnTitle">Contact</div>
        <div className="columnContent">
          <span>Address</span>
          <br />
          <span>Phone Number</span>
          <br />
          <span>Email</span>
        </div>
      </div>

      <div>
        <div className="columnTitle">Social Media Links</div>
        <div className="columnContent">
          <span>Facebook</span>
          <br />
          <span>Twitter</span>
          <br />
          <span>Instagram</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;