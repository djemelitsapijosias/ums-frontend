import React from "react";
import "../styles/FooterDasboard.css";

function Footer() {
  return (
    <footer class="main-footer text-light">
      <div className="footer-right">
        <strong>
          &copy; 2025{" "}
          <a href="https://ums.kesug.com" class="">
            ums.com
          </a>
        </strong>{" "}
        All rights reserved.
      </div>
      <div className="footer-center"></div>
      <div className="footer-left">
        <strong>I-TECH RC</strong>
      </div>
    </footer>
  );
}

export default Footer;
