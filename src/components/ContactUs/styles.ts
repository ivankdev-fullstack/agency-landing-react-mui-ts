import { Theme } from "@mui/material";

const styles = {
  contactUs: (theme: Theme) => ({
    padding: "44px 20px",
    textAlign: "left",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "200px 20px 190px",
    },
  }),
  wrapper: (theme: Theme) => ({
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1240px",
      display: "flex",
      alignItems: "center",
      gap: "120px",
    },
  }),
  info: (theme: Theme) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
  }),
  form: (theme: Theme) => ({
    maxWidth: "613px",
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
    },
  }),
  imgInfo: {
    width: "16px",
    height: "16px",
    mr: "4px",
  },
  titleInfo: (theme: Theme) => ({
    color: `${theme.palette.slateBlue.main}`,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
  }),
  titleValue: {
    color: "#000000",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    marginTop: "3px",
  },
  itemBlockInfo: {
    marginBottom: "24px",
    flex: 1,
  },
  input: (theme: Theme) => ({
    display: "flex",
    gap: "25px",
    flexDirection: "column",
    marginBottom: "15px",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
  }),
  textField: {
    width: "300px",
    "& input::placeholder": {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
  photo: {
    width: "100%",
    margin: "44px auto 0",
    maxWidth: "508",
    display: "block",
  },
  textareaAutosize: {
    margin: "24px 0",
    padding: "12px",
    width: "100%",
    fontSize: "20px",
    lineHeight: "20px",
    border: "0.5px solid #777FEB",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
  },
};

export default styles;
