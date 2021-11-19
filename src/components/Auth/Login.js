import { Fragment } from "react";
import GoogleLogin from "react-google-login";
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  return (
    <Fragment>
      <div class="container" >
        <div class="row d-flex justify-content-center align-items-center">
          <GoogleLogin/>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
