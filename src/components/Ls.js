import React from "react";
import ls from "../Li.png";
import Styles from "./Ls.module.css";
function Ls({lsHandler})
{

    
        return(
        
            <div className={Styles.lsDiv} >
                <button onClick={lsHandler} className={Styles.lsBut}>
                    <img src={ls} className={Styles.lsImg} alt="Not Found"/>
                </button>
            </div>
        )


        

    
}
export default Ls;