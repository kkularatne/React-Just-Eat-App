import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, forwardedRef) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={forwardedRef} {...props.input}></input>
    </div>
  );
});

export default Input;
