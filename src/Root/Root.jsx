import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins w-[80%] mx-auto">
            <Outlet/>
        </div>
    );
};

export default Root;