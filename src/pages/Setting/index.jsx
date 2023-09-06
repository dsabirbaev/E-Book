
import { useEffect } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import "./style.scss";

const index = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/settings/my-account")
    }, [])
    return (
        <div>
            <header className="bg-[#E5E5E5]">
                <div className="container">
                   
                        <ul className="flex">
                            <li className="w-1/4 mx-1">
                                <NavLink to="/settings/my-account" className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]">Profile</NavLink>
                            </li>
                            <li className="w-1/4 mx-1">
                                <NavLink to="/settings/security" className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]">Xafsizlik</NavLink>
                            </li>
                            <li className="w-1/4 mx-1">
                                <NavLink to="/settings/setting" className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]">Sozlamalar</NavLink>
                            </li>
                        </ul>
                   
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default index;