import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins">
            <div className="bg-[#030712] lg:h-[155px]">
            <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div className="bg-[#030712] lg:h-[275px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;