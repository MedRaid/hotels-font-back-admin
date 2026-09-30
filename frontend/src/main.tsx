// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import RoomContextProvider from "./context/RoomContext.tsx";

createRoot(document.getElementById("root")!).render(
  <RoomContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </RoomContextProvider>,
);
