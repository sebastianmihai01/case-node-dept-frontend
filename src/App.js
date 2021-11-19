import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-login";
import React, {
  Fragment,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import Browse from "./components/Router/Browse";
import NavigationBar from "./components/Navigation/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Router/Main";
import Contact from "./components/Misc/Contact";
import Login from "./components/Auth/Login";
import Home from "./components/Auth/Home";
import SessionContext from "./components/Context/auth-context";

const App = (props) => {
  const [submitState, setSubmitState] = useState(
    localStorage.getItem("isLoggedIn") || "false"
  );
  const [validToken, setValidToken] = useState("false");
  const [consent, setConsent] = useState(false);
  const [name, setName] = useState("User");
  const [validUser, setValidUser] = useState(true);
  const [userData, setUserData] = useState({});

  useEffect(async () => {
    let valid = await checkSession(userData);
    if (valid == false) setValidUser(false);
  }, validUser);

  async function responseGoogleSuccess(response) {
    const request_body = {
      name: response.profileObj.name,
      email: response.profileObj.email,
    };
    setUserData(request_body);
    const valid = await loginUser(request_body);
    console.log(valid);
    if (valid) {
      localStorage.setItem("isLoggedIn", "true");
      setValidUser(true);
      setSubmitState(!submitState);
    }

    setName(
      response.profileObj.name ||
        response.profileObj.givenName ||
        response.profileObj.familyName ||
        "User"
    );

    await dummyPost();
  }

  async function dummyPost() {
    let valid = false;
    await fetch("http://localhost:8080/testapi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  async function loginUser(request_body) {
    let valid = false;
    await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request_body),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        valid = true;
      })
      .catch((error) => {
        console.log(error);
      });
    return valid;
  }

  async function checkSession() {
    let valid = false;
    await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user != localStorage.getItem("token")) {
          throw new Error("Authentication problem! Please reload!");
          valid = false;
        }
        valid = true;
      })
      .catch((error) => {
        console.log(error);
      });
    return valid;
  }

  const signoutHandler = (e) => {
    console.log("logged out");
    setSubmitState(!submitState);
    localStorage.setItem("isLoggedIn", false);
    setConsent(false);
  };

  const responseGoogleFalse = (response) => {
    setSubmitState(false);
    console.log(response);
    console.log(response.profileObj);
  };

  const acceptConsent = (event) => {
    setConsent(!consent);
  };

  const getValidToken = (event) => {
    //get token from database
  };

  const shareData = async () => {
    try {
      if (navigator.share) {
        await navigator.share("This is a test");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {localStorage.getItem("isLoggedIn") &&
        localStorage.getItem("isLoggedIn").toString() == "true" &&
        validUser == true && (
          <>
            <NavigationBar signoutHandler={signoutHandler} />

            <Routes>
              <Route path="/Home" element={<Home name={name} />}></Route>
              <Route path="/Browse" element={<Browse />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </>
        )}

      {!(localStorage.getItem("isLoggedIn") == "true") || !validUser ? (
        <React.Fragment>
          <div className="col-sm">
            <div
              class="card text-white bg-dark mb-3"
              style={{
                backgroundColor: "rgba(245, 245, 245, 1)",
                textAlign: "center",
                borderRadius: "0",
                paddingInline: "20em",
                top: "0",
                opacity: ".8",
              }}
            >
              <div class="card-body" style={{ marginTop: "2em" }}>
                <h5 class="card-title" style={{ fontSize: "2em" }}>
                  DEPT Node Backend Case
                </h5>
                <h5
                  class="card-title"
                  style={{ fontSize: "2em", marginTop: "1em" }}
                >
                  Sebastian Mihai
                </h5>
                <h5 class="card-title" style={{ fontSize: "1.2em" }}>
                  mihaisebastian01@gmail.com / mihaisebastian2507@gmail.com
                </h5>
                <p class="card-text" style={{ marginTop: "2em" }}>
                  Frontend interface for the Node backend Case, which will
                  provide a cool UX for querying films, aggregating both IMDb
                  and YouTube public APIs.
                </p>
                <p class="card-text" style={{ marginBottom: "1.5em" }}>
                  I am no Graphic Designer, but I tried my best to make a
                  pleasant looking User Interface! If I had more time, I would
                  have done this in Tailwind instead of Boostrap, but deadlines
                  have to be respected!
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-sm"
            style={{ bottom: "0em", paddingInline: "20em" }}
          >
            <div
              class="card text-white bg-dark mb-3"
              style={{
                opacity: "0.9",
                borderRadius: "0px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                textAlign: "center",
                paddingInline: "6em",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "2em",
                    textAlign: "center",
                    paddingInline: "1em",
                    textAlign: "center",
                    marginTop: "1em",
                  }}
                >
                  {" "}
                  Please log in to continue to the application!
                </p>
                <form>
                  <input
                    type="checkbox"
                    id="consentbox"
                    name="consent"
                    value="consentbox"
                    style={{ float: "center", transform: "scale(1.5)" }}
                    onClick={acceptConsent}
                  />
                  <label for="consentbox" style={{ fontSize: "18px" }}>
                    {" "}
                    (GDPR) By proceeeding using this application I accept by default
                    that the developer is not responsible for any GDPR, data leakage or user
                    data related problems that might occur in the process, as
                    the project is not meant for public use, but solely for
                    evaluation purposes! (See Backend and Project Manunal for details) {" "}
                  </label>
                </form>
                {consent == true &&
                (localStorage.getItem("isLoggedIn") == "false" ||
                  validUser == false ||
                  localStorage.getItem("isLoggedIn") == null) ? (
                  <div
                    class="card d-flex justify-context-center text-black bg-black mb-4"
                    style={{
                      marginTop: "0.5em",
                      alignSelf: "center",
                      background: "green",
                      border: "3px solid green",
                      marginInline: "10em",
                    }}
                  >
                    <GoogleLogin
                      clientId="678540909389-rn0oidtibsjklbdbd2ken7l1ri3c4rgr.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={responseGoogleSuccess}
                      onFailure={responseGoogleFalse}
                      cookiePolicy={"single_host_origin"}
                    >
                      {" "}
                      <h2
                        style={{
                          textDecoration: "bold",
                          fontFamily: "monospace",
                          fontSize: "27px",
                        }}
                      >
                        Log in with Google!
                      </h2>
                    </GoogleLogin>
                  </div>
                ) : (
                  ""
                )}

                {consent == false &&
                (localStorage.getItem("isLoggedIn") == "false" ||
                  localStorage.getItem("isLoggedIn") == null) ? (
                  <div
                    class="card d-flex justify-context-center text-black bg-black mb-4"
                    style={{
                      marginTop: "0.5em",
                      background: "red",
                      border: "3px solid red",
                      pointerEvents: "none",
                      marginInline: "8em",
                    }}
                  >
                    <GoogleLogin
                      clientId="678540909389-rn0oidtibsjklbdbd2ken7l1ri3c4rgr.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={responseGoogleSuccess}
                      onFailure={responseGoogleFalse}
                      cookiePolicy={"single_host_origin"}
                    >
                      {" "}
                      <h2
                        style={{
                          textDecoration: "bold",
                          fontSize: "20px",
                          fontFamily: "monospace",
                        }}
                      >
                        Accept the condition to proceed logging in with Google !
                      </h2>
                    </GoogleLogin>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default App;
