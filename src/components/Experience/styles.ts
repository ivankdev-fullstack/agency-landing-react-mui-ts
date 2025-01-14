import { Theme } from "@mui/material";

const styles = {
  experience: (theme: Theme) => ({
    padding: "44px 20px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    background: "#F5F5F5",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "88px 20px",
    },
  }),

  wrapper: {
    maxWidth: "1240px",
    margin: "0px auto",
  },
  links: (theme: Theme) => ({
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "240px",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      gap: "40px",
      maxWidth: "100%",
    },
  }),
  imgItem: (theme: Theme) => ({
    width: "100%",
    marginTop: "24px",
    maxWidth: "402px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "44px",
    },
  }),
  contentTitle: (theme: Theme) => ({
    fontSize: "14px",
    lineHeight: "17px",
    marginTop: "12px",
    maxWidth: "402px",
    textAlign: "left",
    margin: "12px auto 0",
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      lineHeight: "29px",
    },
  }),
};

export default styles;
