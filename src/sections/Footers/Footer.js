import React from "react";
import "./Footer.css";
import { Box, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InputWithButton from "../../components/InputWithButton";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  const footerMenuItems = [
    "Brands",
    "Gift Certificates",
    "Affiliate",
    "Returns",
    "Specials",
    "Contact Us",
    "Site Map",
  ];
  return (
    <Grid container spacing={2} className="footer-container">
      <Grid item id="newsletter-container" sm={12}>
        <EmailIcon />
        <Typography component="div" variant="h4">
          Newsletter Signup
        </Typography>
        <Typography raphy component="div" variant="subtitle2">
          Newsletter Signup Join Our List And Get Discount On Your First
          Purchase!
        </Typography>
        <Box>
          <InputWithButton type='email' placeholder='Enter Your Email Address' button={<SendIcon />}/>
        </Box>
      </Grid>
      <Grid item className="row" sm={6} id="footermenu">
        {footerMenuItems.map((item, index) => (
          <Typography
            component="div"
            variant="subtitle1"
            key={index}
            id={"footermenu-item"}
          >
            {item}
          </Typography>
        ))}
      </Grid>
      <Grid item container spacing={2} sm={10} id="copyright-container">
        <Grid item>
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Grid>
        <Grid item>
          <Typography>
            Powered By OpenCart Flowrest - Flower Store © 2022
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
}
