import { Theme } from "@mui/material";

const styles = {
  creativeDesign: (theme: Theme) => ({
    padding: "60px 20px 88px",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "192px 20px",
    },
  }),
  wrapper: (theme: Theme) => ({
    [theme.breakpoints.up("md")]: {
      maxWidth: "1240px",
      alignItems: "center",
      gap: "35px",
    },
  }),
  stack: (theme: Theme) => ({
    marginTop: "44px",
    gap: "44px",
    flexWrap: "wrap",
    flexDirection: "initial",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1240px",
      alignItems: "center",
      gap: "15px",
    },
  }),
};

export default styles;
