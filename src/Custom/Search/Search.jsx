import React from "react";
import "./Search.scss";
import TextField from "@material-ui/core/TextField";

export default function Search() {
  return (
    <div className="Search">
      <TextField id="standard-search" label="Search" type="search" />
    </div>
  );
}
