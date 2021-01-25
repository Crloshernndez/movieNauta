import React from "react";
import "./NotFoundPage.css";
import Meme from "./../../assets/images/404.gif";

function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__container">
        <img src={Meme} />
      </div>
    </div>
  );
}

export default NotFoundPage;
