import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="bg-blue-100 min-h-screen max-w-screen-md mx-auto">
            <Header/>
            <Outlet/>
        </div>
        
    );
};

export default Layout;