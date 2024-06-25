import { useState } from "react";
import Button from "@mui/material/Button";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./core/theme";
import Layout from "./views/Layout";

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
