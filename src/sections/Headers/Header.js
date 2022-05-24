import React from "react";
import "./Header.css";
import { Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputWithButton from "../../components/InputWithButton";
import LogoContainer from "../../components/LogoContainer";

export default function Header() {
  // -----------------static data-------------------
  const BrandName = "brand name";
  const contactNumber = "+91 xxxxx xxxxx";
  const navMenuItems = [
    "Home",
    "Collection",
    "Blossom",
    "Daffodil",
    "Flowers",
    "Bouquet",
    "Blogs",
  ];
  return (
    <Grid container spacing={2} id="header-container">
      {/* -------------1st row-------------- */}
      <Grid item container spacing={2} id="brand-name-container" sm={12}>
        <Grid item className="row brand-container" sm={4}>
          <LogoContainer id="logo-container" src="" alt="" title={BrandName} />
        </Grid>

        <Grid item container spacing={2} sm={8} id="search-and-contact">
          <Grid item id="search-bar">
            <InputWithButton
              type="search"
              placeholder="Search Products Here "
              id="search-input"
              button={<SearchIcon />}
            />
          </Grid>
          <Grid item id="contact-details">
            <Typography component={"div"} variant="subtitle1">
              {`Contact Now : ${contactNumber}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* -------------2nd row-------------- */}
      <Grid item container spacing={2} id="navmenu-container">
        <Grid item className="row" sm={8} id={"navmenu"}>
         
         
          {navMenuItems.map((item, index) => (
            
            <Typography
              component="div"
              variant="subtitle1"
              key={index}
              id={"navitem"}
            >
              {item}
            </Typography>
            
          ))}



        </Grid>
        <Grid
          item
          container
          spacing={2}
          sm={4}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Grid item>
            <ShoppingCartIcon />
          </Grid>
          <Grid item>
            <AccountCircleIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
