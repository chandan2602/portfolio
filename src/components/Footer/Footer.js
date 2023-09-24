import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      {/* copyright */}
      <div className="footer-cpyright">
        <p>© Chandan Kumar Nayak. All Right reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100057263031437&mibextid=ZbWKwL">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>     
        <li>
          <a href="https://www.instagram.com/chandankumarnayak74/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>      
        <li>
          <a href="http://www.linkedin.com/in/chandan-nayak-6196b7245">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
