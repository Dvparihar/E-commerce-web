import React from "react";
import { Box, Typography } from "@mui/material";

const componentStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    width: "42px",
    height: "42px",
  },
  title: {
    fontSize: "28px",
    marginLeft: "10px",
  },
};

export default function LogoContainer(props) {
  return (
    <Box style={componentStyles.container} id={props.id}>
      <img style={componentStyles.image} src={props.src} alt={props.alt} />
      <Typography style={componentStyles.title} component="div" variant="h4">
        {props.title}
      </Typography>
    </Box>
  );
}
