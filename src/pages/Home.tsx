import { useState } from "react";
import Menu from "../components/Menu.js";
import { LightMode } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
function App() {
  return (
    <>
      <Menu />
      <div>Mode</div>
      <LightMode />
      <DarkMode />
    </>
  );
}

export default App;
