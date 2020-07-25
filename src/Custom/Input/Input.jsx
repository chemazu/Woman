import React from "react";
import "./Input.scss";
import TextField from "@material-ui/core/TextField";

export default function Input({ content, type }) {
  return (
    <div className="Input">
      <TextField id="standard-search" label={content} type={type} />
    </div>
  );
}
