
import { useEffect, useContext } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import "./style.scss";
import SettingHeader from "./SettingHeader";
import { Button } from "antd";
import {langs} from "../../lang/lang";
import {Localization} from "../../store/store";

const index = () => {
    const navigate = useNavigate();

    const {lang} = useContext(Localization);
    const t = langs[lang];

    useEffect(() => {
        navigate("/settings/my-account")
    }, [])
    return (
        <div>
            <SettingHeader t={t}/>
            <Outlet />

            <div className="container">
                <Link to="/">
                    <Button className="mt-12 mb-5">{t?.home}</Button>
                </Link>

            </div>
        </div>
    );
};

export default index;