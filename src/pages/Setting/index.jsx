

import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <div>
            <h1>Settings</h1>
            <Outlet />
        </div>
    );
};

export default index;