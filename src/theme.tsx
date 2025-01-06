import { createTheme, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    slateBlue: PaletteColor;
  }
  interface PaletteOptions {
    slateBlue?: PaletteColor;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    slateBlue: {
      main: "#777FEB",
      light: "#A0A3F7",
      dark: "#4E52D5",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "39px",
      textTransform: "capitalize",
      color: "#000000",
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "29px",
      textTransform: "capitalize",
      color: "#000000",
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#686868",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: "capitalize", // Custom style
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "0.5px solid #777FEB",
        },
        root: {
          borderRadius: "8px",
          color: "#000",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 500,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #777FEB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #777FEB",
          },
        },
      },
    },
  },
});

export default theme;
