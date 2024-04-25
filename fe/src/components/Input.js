import React from "react";

export default function Input(props) {
  return <input type={props.type ? props.type : "text"} {...props} />;
}
