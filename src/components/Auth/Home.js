import { Fragment, useState, useCallback, useContext, useEffect } from "react";
import Login from "./Login";
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import Contact from "../Misc/Contact";
import Browse from "../Router/Browse";

import "bootstrap/dist/css/bootstrap.css";
import ShareModal from "../Misc/ShareModal";
import SessionContext from "../Context/auth-context";
import NavigationBar from "../Navigation/NavigationBar";
import { isPropertySignature } from "typescript";
const Home = (props) => {
  return (
    <SessionContext.Provider
      value={{ isLoggedIn: localStorage.getItem("isLoggedIn") }}
    >
      {localStorage.getItem("isLoggedIn") &&
      localStorage.getItem("isLoggedIn").toString() == "true" ? (
        <>
          <div
            class="card text-white bg-dark mb-3"
            style={{
              top: "4em",
              width: "40em",
              height: "32em",
              margin: "auto",
              textAlign: "center",
              backgroundColor: "rgba(245, 245, 245, 1)",
              opacity: ".9",
              paddingBottom: "4em",
            }}
          >
            <div class="card-body" style={{ marginTop: "2em" }}>
              <h2
                class="card-title"
                style={{
                  fontSize: "3em",
                  color: "#6938B3",

                }}
              >
                Welcome, {props.name || "User"} !
              </h2>
              <p
                class="card-text"
                style={{ marginTop: "1em", fontSize: "1.5em" }}
              >
                (Note for evaluators) Please keep in mind the following while
                using this application:
              </p>
              <p class="card-text">
                1) By proceeeding using this application it is assumed by
                default that I am not responsible for any data sensitive
                problems/ GDPR related problems that might occur.
              </p>
              <p class="card-text">
                2) The number of requests is limited ~5/min and ~20/h, and I
                will pay 1 cent per additional request that is being sent. This
                also means that you can only reload the 'Browse' page for a
                limited (quite short) amount of times!
              </p>
              <p class="card-text">
                {" "}
                3) Please don't insert any sensitive data anywhere, and don't
                share this app with 3rd party entities. The API keys will be
                deleted shortly after the evaluation result is known.
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <div
        className="container text-center"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginTop: "9em",
          gridGap: "20px",
        }}
      ></div>
    </SessionContext.Provider>
  );
};

export default Home;
