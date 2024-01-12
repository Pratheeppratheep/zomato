
import React, { Component } from "react";
import { withRouter} from 'react-router-dom'; 
import '../style/wallpaper.css'
import axios from 'axios';


class Wallpaper extends Component {
  
  constructor(props) {
    super(props);
       this.state = {
      location: [],
      inputText:'',
      restarent:[],
      suggestions:[],
      text:'',
    };
  }


  componentDidMount() {
    // Fetch locations
    axios.get('http://localhost:1300/getlocation')
      .then(res => this.setState({ location: res.data.location }))
      .catch(err => console.log(err))

    axios.get('http://localhost:1300/getrestarent')
    .then(res => this.setState({ restarent: res.data.restarent }))
    .catch(err => console.log(err))

      

  }


  // handelLocation = (event)=>{
  //    const locationId=event.target.value;

     

    //  axios({

    //   method:"GET",
    //   url:`http://localhost:1300/getrestarent/${locationId}`,
    //   headers:{'content-type':'application/json'}
    //  })

    //  .then(response=>{
    //   this.setState({restarent:response.data.restarent});

    //  } )

    //  .catch(err => console.log(err));

 // }

  handelSearch=(event)=>{
  // let inputText = event.target.value;

  // const { restarent }=this.state;

  // const  suggestions=restarent.filter(item=>item.name.toLowercase().includes(inputText.toLowercase()));

  // this.setState({suggestions,inputText});

  const inputtext = event.target.value;
        const filter = [];
        const { restarent } = this.state;
        for (let i = 0; i < restarent.length; i++) {
            const restaurantName = restarent[i].name.toLowerCase();
            if (restaurantName.includes(inputtext)) {
                filter.push(restarent[i]);
            }
          }

          this.setState({ suggestions: filter, text: inputtext })
  


  };
  
       showSuggestion= ()=> {
        const{suggestions,text}=this.state;


        if (suggestions.length === 0 && text === undefined) {
           return null;
        } 

        if (suggestions.length > 0 && text === ""){
          return null;
        }


          if (suggestions.length === 0 && text ){

          return <div className="sugg"><li className="res">no result found</li></div>;
          
        }
         
   

        return (
          <ul className="suggestion">
            {suggestions.map((item,index)=>(<li className="res_result" key={index}
             onClick={() => this.handelnavigate(item._id)}>{
            item.name}
            </li>))}
           
          </ul>
        );

        
      };

      handelnavigate=(id)=>{
        this.props.history.push(`/details`)
      }

 render() {
    const {location} = this.state;

    return (
      <div>
        <img src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg" alt="im2" className='homepage' />

        <div className='lo'>e!</div>
        <div className='find-res'>Find the best restarent cafes, and bars</div>

        <div>
          <select className='list-box1'>
          <option>select location</option>
          {location.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>


     <div>     

       <input type="text" placeholder="Please enter Restaurant name" className="search-box" onChange={ this.handelSearch}/>
       {this.showSuggestion()}
       
      </div> 
        </div>
      </div>
      
    )
            }
  }
export default withRouter(Wallpaper);
