import React from 'react';
import List from './List';
import Search from "./Search";
import styles from './Student.module.css';
function Student({setName,name,nameis,setNameDis,deleteit,checkedHandler,searchbtnhandler,Fname,fBool,com,all})
{
    if(checkedHandler==='')
    {
        return(
            <div className={styles.initial} style={{pointerEvents:"none"}}>
            <div className={styles.intext}>
             <input type="text" className={styles.input} onChange={setName} value={name} />
             <button className={styles.clickadd} onClick={setNameDis}>Add</button>
             
                 </div>
             <Search searchbtnhandler={searchbtnhandler}/> 
             </div>
                 );
    }
    
         else if(!fBool)
            {
                return(
                    <div className={styles.initial}>
                    
            
                   <div className={styles.intext}>
                    <input type="text" className={styles.input} onChange={setName} value={name} />
                    <button className={styles.clickadd} onClick={setNameDis}>Add</button>
                        </div> 
                    <Search searchbtnhandler={searchbtnhandler}/>
                    { comhand(com,all)
                    
                       
                    
            }

                            
                    
                    {
                    nameis.map((indi,i) =>
                        {
                            if(com===true)
                            {
                                if(indi.checked===true)
                                {

                                    
                                    
                                    
                                    
                                    return(
                                        <>

                                        <List key={i} checked={indi.checked} deleteit={deleteit} id={indi.id} indiname={indi.kName} checkedHandler={checkedHandler}  />
                                        </>
                                        )
                                    }
                                    else{
                                        return null;
                                    }
                                        
                            }
                            
                                else if(all===true)
                                {
                                    
                                    return(
                                        <List key={i} checked={indi.checked} deleteit={deleteit} id={indi.id} indiname={indi.kName} checkedHandler={checkedHandler} />
                                        
                                        
                                        //  <h1 key={i}>  student : {n}</h1>
                                        
                                        
                                        
                                        
                                        )

                                }
                                
                            else if(com===false)
                            {
                                if(indi.checked===false)
                                {

                                    
                                    
                                    return(
                                        <List key={i} checked={indi.checked} deleteit={deleteit} id={indi.id} indiname={indi.kName} checkedHandler={checkedHandler}  />
                                        
                                        
                                        //  <h1 key={i}>  student : {n}</h1>
                                        
                                        
                                        
                                        
                                        )
                                    }
                                    else{
                                        return null;
                                    }
                                }
                                return null;
                        
                        })

                        }
                      
                    

        </div>
        

                )

            }



            if(fBool)
            {
                return(
                    <div className={styles.initial}>
                    
                    <Search searchbtnhandler={searchbtnhandler}/>
                    {
                    nameis.map((indi,i) =>
                        {
                            if(indi.kName.toLowerCase().indexOf(Fname.toLowerCase())!==-1)
                            {

                                
                                return(
                                    <div key={indi.id} style={{backgroundColor:"white"}}>
                                    <List key={indi.id} deleteit={deleteit} id={indi.id} indiname={indi.kName} checkedHandler={checkedHandler} checked={indi.checked} />
                                        </div>
                                    //  <h1 key={i}>  student : {n}</h1>
                                    )
                                }
                                return null;
                                
                                
                            
                            
                                
                                
                                
                                
                        
                        })
                    }
                    
            

                            
                                
                                <div style={{position:"absolute",left:"32%",top:"90px",zIndex:"-100"}}>
                                <h2>
                                
                                </h2>
                                </div>
                            
                        
                        

                        
                        
            
                      
                    

        </div>
        

                )

            }
        
        
         
}
function comhand(com,all)
{
    if(com)
    {
        return(
            <div className={styles.com}>
             <h3>
             <strong>Completed</strong>
             </h3>
            </div>
        )
    }
    else if(all){
        return (
            <div className={styles.com}>
                <h3>
                    <strong>All</strong>
                </h3>
            </div>
        )
    }
    else if(!com)
    {
        return(
            <div className={styles.com} >
                <h3>
                    <strong>Uncompleted</strong>
                </h3>
            </div>
        )
    }
    
}
export default Student;