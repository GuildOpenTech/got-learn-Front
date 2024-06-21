import createTheme from "@mui/material/styles/createTheme";
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
