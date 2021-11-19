import React, { Fragment } from "react";
import { Link, NavLink, Route } from "react-router-dom";

const HeaderButton = (props) => {
  return (
    <Fragment>
      <NavLink to={`/${props.name}`} style={{ textDecoration: "none" }}>
        <div
          className="nav-item nav-link"
          style={{ paddingRight: "1em", color: "black", fontSize: "20px" }}
        >
          {props.name}

        </div>

        {props.children}
        
      </NavLink>

    </Fragment>
  );
};

export default HeaderButton;
