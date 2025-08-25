import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer-icons">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="footer-data">
          <ul>
            <div>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </div>
          </ul>

          <ul>
            <div>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </div>
          </ul>
          <ul>
            <div>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </div>
          </ul>
          <ul>
            <div>
              <li>Media Center</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
