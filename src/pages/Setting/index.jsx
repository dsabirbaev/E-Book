
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";

const index = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/settings/my-account")
    }, [])
    return (
        <div>
            <h1>Settings</h1>
            <Outlet />
        </div>
    );
};

export default index;