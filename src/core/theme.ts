import { createTheme } from "@mui/material";
import { Colors } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.PRIMARY,
    },
    secondary: {
      main: Colors.SECONDARY,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {},
    },
  },
});

export { theme };
