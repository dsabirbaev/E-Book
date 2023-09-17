
import { useContext } from "react";
import Intro from "../../components/Intro";
import SearchPanel from "../../components/UI/SearchPanel/SearchPanel";
import Category from "../../components/Category/Category";
import "./style.scss"
import { langs } from "../../lang/lang";
import { Localization } from "../../store/store";


const index = () => {

    const {lang} = useContext(Localization);
    const t = langs[lang];

    return (
        <div className="mainsection">
            <Intro t={t}/>
            <SearchPanel t={t}/>
            <Category t={t}/>
           
        </div>
    );
};

export default index;