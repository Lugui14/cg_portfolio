import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

const Theme = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Theme;
