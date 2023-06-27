import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./navbar.css";

const Root = ({ color }: any) => {
  return (
    <div
    //   style={{
    //     border: "1px solid #ccc",
    //   }}
    // className="color-box"
    >
      <Navbar />

      <div
        style={{
          marginTop: "4rem",
        }}
      >
      <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
