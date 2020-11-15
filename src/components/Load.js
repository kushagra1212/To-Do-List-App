import React from "react";
import Styles from "./Load.module.css";
function Load(props)
{
    
    return(
        <div className={Styles.upper}>
<h1 className={Styles.h1}>Loading...</h1>
        <div className={Styles.loader}>
             
        <div className={Styles.loader2} style={{width:props.width}}> </div>
        </div>
        
        </div>
    );
    

}
export default Load;