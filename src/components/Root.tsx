import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./navbar.css";

const Root = () => {
    return (
        <div>
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
