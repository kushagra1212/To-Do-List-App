import React from 'react';
import Student from './Student';
import Load from './Load';
import Styles from "./Amain.module.css";
import Search from "./Search"
import Ls from "./Ls"
class Amain extends React.Component 
{
    constructor(props)
    {
        super(props);
        
    this.state=
    {
        
        name:'',
        nameDis:[],
        isload:true,
        width:0,
        searchbtn:false,
        Fname:'',
        fBool:false

    };

    }
    setName=(e)=>
    {
        
            
        this.setState({name:e.target.value.substr(0,100000)});
        
    }

    
    
    setNameDis=()=>
    {
        if(this.state.name)
        {
            this.setState({nameDis: [...this.state.nameDis,{kName:this.state.name,id:Math.random(),checked:false}]});
            this.setState({name:''});
           console.log(this.state.nameDis)
            localStorage.setItem('document',JSON.stringify(this.state)); 

            
        }}
setFname=(e)=>
{
    this.setState({Fname:e.target.value})


}
    componentDidMount()
    {
        let ourinterval=setInterval(() => {
            this.setState({width:this.state.width+4})
        }, 8);
        setTimeout(() => {
            this.setState({isload:false})
            clearInterval(ourinterval);
        },this.props.ourInt?0:500);
       
       let document=JSON.parse(localStorage.getItem('document'));
       if(localStorage.getItem('document'))
       {
           this.setState({
                
                nameDis:document.nameDis
                

           });

        
        }
        else{
            this.setState({
                
                nameDis:[]
            });
        }
    }
deleteit=(id)=>
{
    this.setState({nameDis:this.state.nameDis.filter((ele)=> ele.id!==id)});
 

}
componentDidUpdate()
{
    localStorage.setItem('document',JSON.stringify(this.state)); 
}

checkedHandler=(id)=>
{
    this.setState(prevstate=>({
       nameDis:prevstate.nameDis.map(ele=>ele.id===id ? {...ele,checked:!(ele.checked)}:ele) 
    }))
   
}
searchbtnhandler=()=>
{
    this.setState({searchbtn:!this.state.searchbtn,fBool:!this.state.fBool});
    

}


    render()
    {
        if(this.state.isload) 
        {return (
        <div>
            
            <div className={Styles.divstud}>
        
        <Student  setNameDis={this.setNameDis.bind(this)} nameis={''} setName={this.setName.bind(this)} checkedHandler={''} name={''} deleteit={''} Fname={this.state.Fname} fBool={this.state.fBool} com={this.props.com} all={this.props.all} />
      </div>
      <Load width={this.state.width}/>
            <Ls/>
        </div>);
        }
        else if(this.state.searchbtn)
        {
            if(this.state.searchbtn)
            {
                return(
                    <div>

                    <Search searchbtnhandler={this.searchbtnhandler.bind(this)} searchbtn={this.state.searchbtn}/>
                    <input type="text" className={Styles.findInput} placeholder="Search here" value={this.state.Fname} onChange={this.setFname.bind(this)} />
                    <Ls/>
                    
            <Student   setNameDis={this.setNameDis.bind(this)} nameis={this.state.nameDis} setName={this.setName.bind(this)} checkedHandler={this.checkedHandler.bind(this)} name={this.state.name} deleteit={this.deleteit.bind(this)}  searchbtnhandler={this.searchbtnhandler.bind(this)} Fname={this.state.Fname} fBool={this.state.fBool} com={this.props.com} all={this.props.all} />
                    </div>
                )
            }
else{

    return(
        <div>
                    <Search searchbtnhandler={this.searchbtnhandler.bind(this)} searchbtn={this.state.searchbtn}/>
                    
                    
                </div>
            )
        }
    }
        else
        {

            
            return(
                <div>
                    <Ls/>
            <Student   setNameDis={this.setNameDis.bind(this)} nameis={this.state.nameDis} setName={this.setName.bind(this)} checkedHandler={this.checkedHandler.bind(this)} name={this.state.name} deleteit={this.deleteit.bind(this)}  searchbtnhandler={this.searchbtnhandler.bind(this)}   Fname={this.state.Fname} fBool={this.state.fBool} com={this.props.com} all={this.props.all} />

        </div>
        )
    }
    }
}
export default Amain;