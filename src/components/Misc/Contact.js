import { createRequire } from "module";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import linkedin from "../Images/linkedin.png";
import gmail from "../Images/gmail.png";
import github from "../Images/github.png";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.nativeEvent.stopImmediatePropagation();
    setSubmitted(true);
  };

  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginTop: "4em",
          gridGap: "20px",
        }}
      >
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <section
                class="vh-90"
                style={{
                  left: "10em",
                  opacity: ".9",
                  color: "black",
                  display: "flex",
                  position: "absolute",
                  width: "auto",
                  height: "auto",
                }}
              >
                <div
                  class="card text-white bg-white mb-3"
                  style={{
                    marginRight: "3em",
                    left: "3em",
                    width: "35em",
                    maxWidth: "70rem",
                    textAlign: "center",
                    backgroundColor: "white",
                    opacity: "1",
                  }}
                >
                  <form
                    class="row g-3 needs-validation"
                    novalidate
                    onSubmit={submitHandler}
                    style={{
                      positon: "absolute",
                      width: "35em",
                      borderRadius: "1rem",
                      borderWidth: "1rem",
                      color: "black",
                      paddingTop: "2em",
                      paddingInline: "2em",
                    }}
                  >
                    <div class="col-md-4">
                      <label for="validationCustom01" class="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustom03"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustom02" class="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustom02"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">
                        Username
                      </label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">
                          @
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          value="(GDPR) not required"
                          required
                        />
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5" style={{ marginTop: "1rem" }}>
                      <label for="validationCustom03" class="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustom03"
                        value="(GDPR) not required"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-7" style={{ marginTop: "1em" }}>
                      <label for="validationCustom04" class="form-label">
                        Country
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option>Netherlands</option>
                        <option>Romania</option>
                        <option>Other(Europe)</option>
                        <option>Other(International)</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>

                    <div
                      class="form-group"
                      style={{ marginTop: "1rem", float: "center" }}
                    >
                      <label for="exampleFormControlInput1" class="form-label">
                        Feedback
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>

                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>

                    <div class="col-12" style={{ marginTop: "1rem" }}>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          style={{ marginTop: "0.3em" }}
                          required
                        />
                        <label
                          class="form-check-label"
                          for="invalidCheck"
                          style={{ marginTop: "0em" }}
                        >
                          I understand that the data I send will not be ecrypted
                          or protected against any attacks/ leaks and the
                          developer is not resposible for any problems this
                          creates!
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div class="col-12" style={{ marginTop: "1rem" }}>
                      {!submitted && (
                        <button
                          class="btn btn-primary"
                          type="submit"
                          style={{ marginBottom: "20px" }}
                        >
                          Submit form
                        </button>
                      )}
                      {submitted && (
                        <h3 style={{ color: "green" }}>
                          {" "}
                          Successfully submitted! Thank you!
                        </h3>
                      )}
                    </div>
                  </form>
                </div>
                <div
                  class="card text-white bg-dark mb-3"
                  style={{
                    left: "1em",
                    width: "35em",
                    maxWidth: "70rem",
                    textAlign: "center",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    opacity: "1",
                  }}
                >
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{ fontSize: "3em", marginTop: "1em" }}
                    >
                      Send Me a Feedback!
                    </h5>
                    <p class="card-text" style={{ marginTop: "3em" }}>
                      This is a form to help me improve on my development
                      skills. Please note that the form is far from secure, and
                      you should not put any sensitive data. Its purpose is
                      mostly for show off and to send me an automatic email via
                      SendGrid with your feedback!
                    </p>
                    <p style={{ fontSize: "1.5em" }}>
                      {" "}
                      You can also see my other projects/contact me at the
                      following:{" "}
                    </p>

                    <div>
                      <a
                        href="https://github.com/sebastianmihai01"
                        style={{ marginRight: "30px" }}
                      >
                        <img
                          src={github}
                          height="40px"
                          style={{ borderRadius: "10px" }}
                          width="40px"
                          alt="My github!"
                        />
                      </a>
                      <a
                        href="mailto:mihaisebastian01@gmail.com"
                        style={{ marginRight: "30px" }}
                      >
                        <img
                          src={gmail}
                          height="30px"
                          style={{ borderRadius: "10px" }}
                          width="40px"
                          alt="My github!"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/sebastian-mihai/">
                        <img
                          src={linkedin}
                          height="40px"
                          style={{ borderRadius: "10px" }}
                          width="40px"
                          alt="My linedkin!"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
