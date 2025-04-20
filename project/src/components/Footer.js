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
          <a href="/">Home</a>
          <br />
          <a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>About</a>
          <br />
          <a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>Menu</a>
          <br />
          <a href="/reservations">Reservations</a>
          <br />
          <a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>Order Online</a>
          <br />
          <a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>Login</a>
        </div>
      </div>

      <div>
        <div className="columnTitle">Contact</div>
        <div className="columnContent">
          <span>Lane 1</span>
          <br />
          <span>+44 00 0000 0000</span>
          <br />
          <span>Email@email.com</span>
        </div>
      </div>

      <div>
        <div className="columnTitle">Social Media Links</div>
        <div className="columnContent">
          <a href="https://facebook.com">Facebook</a>
          <br />
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;