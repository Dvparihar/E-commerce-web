import React from "react";
import { Box } from "@mui/material";

const componentStyles = {
  container: {
    width: "100%",
    display: "flex",
    borderRadius: "25px",
    padding: "5px 10px",
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  input: {
    width: "100%",
    marginLeft: "8px",
    fontSize: "18px",
    borderStyle: "none",
    outlineStyle: "none",
  },
  button: {
    fontSize: "18px",
    borderStyle: "none",
    outlineStyle: "none",
    backgroundColor: "transparent",
  },
};

export default function InputWithButton(props) {
  return (
    <Box style={componentStyles.container}>
      <input
        style={componentStyles.input}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
      />
      <button type="button" style={componentStyles.button}>
        {props.button}
      </button>
    </Box>
  );
}
