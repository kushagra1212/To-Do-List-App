import React,{useEffect,useState} from 'react';
import styles from './list.module.css'
import check from '../check.png';
import trash from '../trash.ico';

function List({ indiname,deleteit ,id,checkedHandler,checked}) {
        const [useSty,setSty]=useState({});
        const [count,setcount]=useState(0);
        
    
        useEffect(()=>
        {
         if(checked)
         {
         setSty({opacity:0.2});
         }
         else{
             setSty({opacity:1});
         }
     
        },[count,checked])
    
    function justafun()
    {
            if(window.confirm("are you sure ? ")===true)
            {
                deleteit(id);
            }

        
       
    }
    
   
    function forChecking()
    {
       
        checkedHandler(id);
        
              setcount(count+1);
     

    }
   
    
    return (
        <div className={styles.content}  style={useSty}>
            <div className={styles.textdiv}>
                <h4 className={styles.label}>
                {indiname}
            </h4>
                </div>
            <button onClick={forChecking} className={styles.check} ><img className={styles.img1} src={check} alt="not found"/></button>
            <button  onClick={justafun} className={styles.trash}><img className={styles.img2}   src={trash} alt="not found"/></button>
        </div>
    );

}
export default List;
