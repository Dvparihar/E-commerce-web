import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const componentStyle = {
  container: {
  },
};

export default function NavMenu() {
  const navList = ["home", "about", "contact us", "download"];
  return (
    <Box style={componentStyle.container}>
      {navList.map((item, index) => (
        <Typography
          component="div"
          variant="subtitle1"
          key={index}
          id={"navitem"}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
