import React from "react";
import '../style/home.css';
import axios from 'axios';
class QuickSearchItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          mealtype: [],
        };
      }
    
      componentDidMount() {
        // Fetch locations
        axios.get('http://localhost:1300/getmealtype')
          .then(res => this.setState({ mealtype: res.data.mealtype }))
          .catch(err => console.log(err));
      }
    
      render() {
        const { mealtype } = this.state;
        return (
          <div>
            {mealtype.map((item, index) => (
              <div key={index} className="quickboxcontent">
              
                  <img
                    src={item.image} // Replace with the actual property from your item object
                    alt="Not Found"
                    height="130px"
                    width="130px"
                    className="quickpho"
                  />
                  <h1 className="quickboxheading">{item.name}</h1>
                  <p className="quickboxpara">{item.content}</p>
                
              </div>
            ))}
          </div>
        );
      }
    }
    

//     constructor(props) {
//         super(props);
//            this.state = {
//             mealtype: [],}}

//           componentDidMount() {
//             // Fetch locations
//             axios.get('http://localhost:1300/getmealtype')
//               .then(res => this.setState({ mealtype: res.data.mealtype }))
//               .catch(err => console.log(err))
//           }
//     render(){
//         const {mealtype} = this.state;
//         return(

//             {mealtype.map((item, index) => (
//                 <div key={index} className="quickboxcontent">
//                   <div className="quickimg">
//                     <img
//                       src={item.image} // Replace with the actual property from your item object
//                       alt="Not Found"
//                       height="130px"
//                       width="130px"
//                       className="quickpho"
//                     />
//                     <h1 className="quickboxheading">{item.name}</h1>
//                     <p className="quickboxpara">{item.content}</p>
//                   </div>
//                 </div>
//               ))}
              
//             //   <div className="quickboxcontent">
//             //     <div className="quickimg">
//             //         <img src="./Assets/Breakfast.jpg"alt="Not Found"height="130px"width="130px" className="quickpho" />
//             //         <h1 className="quickboxheading">Breakfast</h1>
//             //         <p className="quickboxpara">Start your day with exclusive breakfast option</p>
                    
//             //     </div>
//             // </div>
                 
//         )
//     }
// }

export default QuickSearchItem;