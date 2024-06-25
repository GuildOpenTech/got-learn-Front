import { useState } from "react";
import Button from "@mui/material/Button";
import { theme } from "./core/theme";
import Layout from "./views/Layout";
import { ThemeProvider } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <h1>titre</h1>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
