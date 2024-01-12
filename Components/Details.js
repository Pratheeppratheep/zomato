import React from "react";
import '../style/details.css' ;
import Header from "./Header";
// import Modal from 'react-modal';


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

class Details extends React.Component{
    constructor(){
        super();
        this.state={
            restaurant:{}
        }
    }
   
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <img src = "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/55eda-restaurants-gandhinagar.jpg?fit=1000%2C667&ssl=1"   alt="Not Found"  style={{width:"100%",height:"400px"}}/>
                </div>
                <div className="heading">THE BIG CHILY</div>
                <button className=" btn-order">Place Online Order</button>
                <div className="tabs">
                    <div className="tab">
                        <input type="radio" id="tab-1" name="tab-group-1" checked/>
                        <label for="tab-1">Overview</label>
                        <div className="content">
                            <div className="about">About This Place</div>
                            <div className="head">Cuisine</div>
                            <div className="value">Bakery,Fast-food</div>
                            <div className="head">Average Cost</div>
                            <div className="value">&#8377 700 for two people(approx)  </div>
                        </div>
                    </div>
                    <div className="tab">
                    <input type="radio" id="tab-2" name="tab-group-1" checked/>
                        <label for="tab-2">Contact</label>
                        <div className="content">
                            <div className="head">Phone Number</div>
                            <div className="value">+6379622733</div>
                            <div className="head">The Big Chill Bakery</div>
                            <div className="value">Shop 1,Plot D,Samuruddhi Complex,chincholi,Mumbai-400002,Maharashtra</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Details;