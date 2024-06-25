import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MenuContextProvider from "./contexts/MenuContext";
import "./styles/styles.css";

const Theme = () => {
  return (
    <MenuContextProvider>
      <div style={{ overflow: "hidden" }}>
        <Navbar />
        <div style={{ minHeight: "90vh" }}>
          <Outlet />
        </div>
      </div>
    </MenuContextProvider>
  );
};

export default Theme;
