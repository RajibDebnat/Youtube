import React from "react";
import { Link } from "react-router-dom";

function UserComponent({ to,id, children }) {
  return <div>{!id ? <Link to={to}>{children}</Link> : <div>{children}</div>}</div>;
}

export default UserComponent;
