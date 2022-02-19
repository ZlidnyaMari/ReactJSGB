import { createTheme } from "@mui/material";
import { orange, blue } from "@mui/material/colors";




const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: blue,
    },
  });

  export default theme