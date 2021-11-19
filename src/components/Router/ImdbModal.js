import { Routes, Route, Switch, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ShareModal from "./LoadingModal";

const ImdbModal = (props) => {
  const [isOn, setIsOn] = useState(true);

  return (
    <React.Fragment>
      <div
        className="row"
        style={{
          alignText: "center",
          justifyContent: "center",
          zIndex:'-6'
        }}
      >
        <div
          class="card text-black bg-grey mb-3"
          id="modal"
          style={{
            borderWidth: "5px",
            borderColor: "black",
            borderRadius: "25px",
            width: "40%",
            height: "28em",
            marginTop: "5em",
            opacity: "0.95",
            zIndex: "2",
            fontSize: "20px",
            position: "fixed",
            backgroundColor: "rgba(245, 245, 245, 1)",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginTop: "0.5em" }}> IMDb Statistics </h1>
          <h3 style={{ marginTop: "0.5em", color: "#6938B3" }}>
            Title
            <h5 style={{ marginBottom: "1em", color: "black" }}>
              {" "}
              {props.title}{" "}
            </h5>
          </h3>
          <h3 style={{ color: "#6938B3" }}>
            Genres
            <h5 style={{ marginBottom: "1em", color: "black" }}>
              {" "}
              {props.genres}{" "}
            </h5>
          </h3>
          <h3 style={{ color: "#6938B3" }}>
            Rating
            <h5 style={{ marginBottom: "1em", color: "black" }}>
              {" "}
              {props.rating}{" "}
            </h5>
          </h3>
          <h3 style={{ color: "#6938B3" }}>
            Release Date
            <h5 style={{ marginBottom: "0.5em", color: "black" }}>
              {" "}
              {props.date}{" "}
            </h5>
          </h3>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImdbModal;
