import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="footer__information">
          <p>
            lorem
            <br />
            lorem
          </p>
          <br />
        </div>
        <div className="footer__social">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <GitHubIcon />
        </div>
      </div>
    </>
  );
}

export default Footer;
