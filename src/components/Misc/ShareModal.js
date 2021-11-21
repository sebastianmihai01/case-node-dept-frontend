import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Facebook from "../Images/facebook.png";
import Twitter from "../Images/twitter.png";
import Microsoft from "../Images/microsoft.png";
import "bootstrap/dist/css/bootstrap.css";

const ShareModal = (props) => {
  const facebookShareHandler = () => {};
  const twitterShareHandler = () => {};

  const shareHandler = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Test",
          text: "Text",
          url: "",
        })
        .then(() => {
          console.log("User Shared!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <button
            type="button"
            onClick={shareHandler}
            className="btn btn-outline-dark"
            style={{
              borderWidth: "2px",
              fontSize: "8px",
            }}
          >
            Share on Microsoft
            <img
              src={Microsoft}
              alt="Share on Microsoft"
              style={{
                marginLeft: "10px",
                width: "20px",
                height: "20px",
              }}
            />
          </button>
        </div>

        <div class="col">
          <FacebookShareButton
            url={"https://dept-node-case-front-sebastian.herokuapp.com/"}
            quote={"DEPT Agency - Node case"}
            hashtag={"#dept #api #films"}
            description={props.name}
            className="Demo__some-network__share-button"
          >
            <button
              type="button"
              className="btn btn-outline-dark"
              style={{ borderWidth: "2px", fontSize: "10px" }}
            >
              Share on Facebook!
              <img
                src={Facebook}
                alt="Share on Facebook"
                style={{
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </button>
          </FacebookShareButton>
        </div>
        <div class="col">
          <TwitterShareButton
            url={"https://dept-node-case-front-sebastian.herokuapp.com/"}
            quote={"DEPT Agency - Node case"}
            hashtag={"#dept #api #films"}
            description={props.name}
            className="Demo__some-network__share-button"
          >
            <button
              type="button"
              className="btn btn-outline-dark"
              style={{ borderWidth: "2px", fontSize: "10px", float: "left" }}
            >
              Share on Twitter!
              <img
                src={Twitter}
                alt="Share on Twitter"
                style={{
                  marginLeft: "10px",

                  width: "20px",
                  height: "20px",
                }}
              />
            </button>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
