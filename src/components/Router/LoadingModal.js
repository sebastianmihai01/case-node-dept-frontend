import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

const ShareModal = (props) => {
  const [shareOn, setShareOn] = useState(false);

  const shareHandler = () => {};

  return (
    <React.Fragment>
      <div
        className="row"
        style={{
          alignText: "center",
          justifyContent: "center",
        }}
      >
        <div
          class="card text-white bg-dark mb-3"
          style={{
            width: "100%",
            height: "2em",
            marginTop: "6em",
            opacity: "0.8",
            fontSize: "20px",
            position: "fixed",
            backgroundColor: "rgba(245, 245, 245, 1)",
            alignItems: "center",
          }}
        >
          L O A D I N G . . .
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShareModal;
