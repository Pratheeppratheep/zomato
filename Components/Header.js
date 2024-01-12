import React from "react";
import '../style/header.css';
//import GoogleLogin from 'react-google-login'
//import Modal from 'react-modal';

// const customStyle={
//     content : {
//         top: '50%',
//         left:'50%',
//         right:'auto',
//         bottom:'auto',
//         marginRight:'-50%',
//         tarnsfrom :" translate(-50%,-50%)",
//         backgroundcolor:'red',
//         border :'1px solid brown',
//     },
// };



class Header extends React.Component{
    constructor(){
        super();
        this.state={
            backgroundcolor:'',
            display:'none'
        }
    }
    
    setAttributes=(path)=>{
        let bg,display;
        if(path === '/'){
            bg='#000000';
            display='none';
        }
        else{
            bg='#ff0000';
            display='inline-block'
        }
        this.setState({backgroundcolor:bg,display:display});
    }
    
     responseGoogle = (response) => {
        console.log(response);
      }

      handleLogin =()=>{
        this.setState({loginModelIsopen:true});
      }
    render(){

        
        const {backgroundcolor,display}=this.state;
        return(
            <div className="header" style={{backgroundcolor:backgroundcolor}}>
                <div className="header-logo" style={{display}}>
                    <p>e!</p>
                </div>
                <div className="user-acccount">
                    <div className="login" onClick={this.handleLogin}>Login</div>
                    <div className="signup" onChange={this.handleLogin}>Create acccount</div>
                </div>

            </div>

            
         
        )
       
    }


}

export default Header;