import React from "react";
import "./Button.css";

function Button({ disabled, onClick }) {
  return (
    <button className={disabled ? "disabled" : "button"} onClick={onClick}>
        Next
    </button>
  )
}

export default Button