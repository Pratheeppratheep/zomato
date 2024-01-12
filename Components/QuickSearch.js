import React from "react";
import QuickSearchItem from "./QuickSearchItem";
import '../style/home.css';
class QuickSearch extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
        <h1 className="quick">Quick Searchs</h1>
        <p className="p">Discover restaurents by type of meal</p>
       
    </div>
    <div className="container_search">
    <div className="quickimg">
        <QuickSearchItem/>
         
          
     

      </div>  
        
            
            </div>
            </div>
        )
    }
}
export default QuickSearch;