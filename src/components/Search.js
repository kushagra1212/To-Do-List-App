import React from "react";
import Styles from "./Search.module.css";
import findimg from "../find.png"
function Search({searchbtnhandler})
{
    
    return(
        <div className={Styles.maindiv}>
        <button onClick={searchbtnhandler} className={Styles.btnn}><img src={findimg} className={Styles.findimg} alt="Not Found"/></button>

        </div>
    )
}
export default Search;