import React from "react";
import axios from "axios";
import '../style/home.css';
import Wallpaper from "./Wallpaper";

import QuickSearch from "./QuickSearch";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            locations:[]
        }
    }
    componentDidMount() {
     axios({
          method: 'GET',
        url: 'http://localhost:1300/getlocation',
          headers: {'Content-Type': 'application/json'}
       })
       .then(response => {
         this.setState({location: response.data.location});
        })
       .catch(err => console.log(err));

       //restarent

       axios({
        method:'GET',
        url:'http://localhost:1300/getrestarent',
        headers:{'content-type':'application/json'}

       })

       .then(response=>{
        this.setState({restarent:response.data.restarent});

       } )

       .catch(err=>console.log(err));


      }
      

      
    render(){
        const {location}=this.state;
        return(
            <div>
                <Wallpaper    locationsData={location}/>
            
                 <QuickSearch    /> 
                 
    </div>
        )
    }
}
export default Home;
