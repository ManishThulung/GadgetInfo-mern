import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>An Web Portal for Mobile Phones</h3>
        <p>
          Contact us: 9823695347 | Patan Dhoka, Lalitpur |
          biratechinfo@gmail.com
        </p>
        <ul className="socials">
          <li>
            <Link to="https://www.facebook.com/bir.uperkoti/">
              <FacebookOutlinedIcon />
              {/* <i className="fa fa-facebook"></i> */}
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/BiraTechinfo">
              <TwitterIcon />
              {/* <i className="fa fa-twitter"></i> */}
            </Link>
          </li>
          <li>
            <Link to="#">
              <InstagramIcon />
              {/* <i className="fa fa-google-plus"></i> */}
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/channel/UC-dtEfLyaAYwMa_fS6qBH6g">
              <YouTubeIcon />
              {/* <i className="fa fa-youtube"></i> */}
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/bir-uperkoti-881955222/">
              <LinkedInIcon />
              {/* <i className="fa fa-linkedin-square"></i> */}
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2021 GadgetInfo. designed by
          <span> Bir & Manish</span>
        </p>
      </div>
    </footer>
    // <footer id="footer">
    //   <div className="leftFooter">
    //     <h3>Contact Us</h3>
    //     <div className="contacts">
    //       <div>
    //         <i className="fas fa-home"> </i>Patan Dhoka, Lalitpur
    //       </div>
    //       <div>
    //         <i className="fas fa-phone-square-alt"> </i>9823695347
    //       </div>
    //       <div>
    //         <i className="far fa-envelope"> </i>biratechinfo@gmail.com
    //       </div>
    //     </div>
    //   </div>

    //   <div className="midFooter">
    //     <Link className="navbar-brand" to="/">
    //       An WEB PORTAL
    //       <br />
    //       for Mobile Phones
    //     </Link>

    //     <p>Copyrights 2021 &copy; gadgetInfo.</p>
    //   </div>

    //   <div className="rightFooter">
    //     <h4>Follow Us</h4>
    //     <i className="fab follow-icon fa-facebook-square"></i>
    //     <i className="fab follow-icon fa-instagram"></i>
    //     <i className="fab follow-icon fa-linkedin"></i>
    //     <i className="fab follow-icon fa-twitter-square"></i>
    //   </div>
    // </footer>
  );
};

export default Footer;
