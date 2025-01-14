import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Drawer from "../Drawer";
import Navbar from "../Navbar";

//SVG ICONS AND IMAGES
import burger_menu from "../../assets/img/burger_menu.svg";
import logo_desk from "../../assets/img/logo_desk.svg";
import logo_mob from "../../assets/img/logo_mob.svg";

import styles from "./styles";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography component="a" href="/" sx={styles.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} alt="burger menu" />
            </IconButton>
          </Box>
          <Typography component="a" href="/" sx={styles.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
