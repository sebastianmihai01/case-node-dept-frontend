const Main = (props) => {
  return (
    <div
      class="card text-white bg-dark mb-3"
      style={{
        top: "4em",
        width: "40em",
        height: "30em",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "rgba(245, 245, 245, 1)",
        opacity: ".9",
      }}
    >
      <div class="card-body" style={{ marginTop: "2em" }}>
        <h2 class="card-title" style={{ fontSize: "3em", color: "#6938B3" }}>
          Welcome !
        </h2>
        <p class="card-text" style={{ marginTop: "1em", fontSize: "1.5em" }}>
          (Note for evaluators) Please keep in mind the following while using
          this application:
        </p>
        <p class="card-text">
          1) By proceeeding using this application it is assumed by default that
          I am not responsible for any data sensitive problems/ GDPR related
          problems that might occur.
        </p>
        <p class="card-text">
          2) The number of requests is limited ~5/min and ~20/h, and I will pay
          1 cent per additional request that is being sent. This also means that
          you can only reload the 'Browse' page for a limited (quite short)
          amount of times!
        </p>
        <p class="card-text">
          {" "}
          3) Please don't insert any sensitive data anywhere, and don't share
          this app with 3rd party entities. The API keys will be deleted shortly
          after the evaluation result is known.
        </p>
      </div>
    </div>
  );
};

export default Main;
