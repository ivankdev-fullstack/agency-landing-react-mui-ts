import { Theme } from "@mui/material";

const styles = {
  hero: (theme: Theme) => ({
    padding: "20px",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "44px 20px 20px",
    },
  }),
  wrapper: (theme: Theme) => ({
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1240px",
      display: "flex",
      alignItems: "center",
      gap: "35px",
    },
  }),
  photo: {
    width: "100%",
    maxWidth: "509px",
    display: "block",
    margin: "44px auto 0",
  },
  text: (theme: Theme) => ({
    margin: "25px 0",
    [theme.breakpoints.up("md")]: {
      marginBottom: "44px",
    },
  }),
};

export default styles;
