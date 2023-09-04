import { Link, NavLink } from "react-router-dom";
import { Dropdown } from 'flowbite-react';

import "./style.scss";

const index = () => {
    return (
        <header className="border-b-2">
            <div className="container">
                <nav className="flex items-center justify-between h-[80px]">

                    <Link to="/">
                        <span className="uppercase text-[#C9AC8C] text-[25px] font-['Rotter']">badiyat</span>
                    </Link>

                    <div className="flex items-center gap-x-[130px]">
                        <ul className="flex items-center gap-x-[23.5px] font-['HelveticaNeueCyrLight'] text-[16px]">
                            <li>
                                <NavLink to="/">
                                    Bosh sahifa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/nasr">
                                    Nasr
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/nazm">
                                    Nazm
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/maqola">
                                    Maqolalar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/forum">
                                    Forum
                                </NavLink>
                            </li>
                        </ul>


                        <Dropdown label="menu">
                            <ul>
                                <li>
                                    <Link to="/profile" className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 m-1 block"> Profile </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 m-1 block"> Maydon </Link>
                                </li>
                                <li>
                                    <Link to="/settings" className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 m-1 block"> Sozlamalar </Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 m-1 block"> Chiqish </Link>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>


                </nav>
            </div>
        </header>
    );
};

export default index;