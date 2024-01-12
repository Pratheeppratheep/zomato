import React from "react";
import '../style/filter.css';
class Filter extends React.Component{
    render(){
        return(
            <div>
                <div className="bg">
    <div className="topsection">
        <div className="style">
            <button type="submit" value="submit" className="button1">Login</button>
            <button type="submit" value="submit" className="button2">Create an Account</button>
        </div>
        <div className="logo">E!</div>
    </div>
    </div>
    <div className="topsection">
    <div className="place">
    <h3>Breakfast Places in Mumbai</h3>
      
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
<div className="qs-boxes-container">
    <div className="qs-box">
        <div className="qs-box-contents"><br/>
            <h5 className="textone">Filters</h5>
            
            <p className="texttwo">--select Location--</p>
        <select className="locationbox">
            <option selected disabled>--Select Location--</option>
            <option value="Del">Delhi</option>
            <option value="MUM">Mumbai</option>
            <option value="CHN">chennai</option>
            <option value="BAN">Bangalore</option>
            <option value="KOL">Kolkata</option>
        </select><br/><br/>
                <p className="square">Cuisine</p>
                    <div className="options"><br/>
                    <input type="checkbox" name="cuisine"className="align"/>North Indian<br/>
                    <input type="checkbox" name="cuisine"className="align"/>South Indian<br/>
                    <input type="checkbox" name="cuisine"className="align"/>Chinese<br/>
                    <input type="checkbox" name="cuisine"className="align"/>Fast food<br/>
                    <input type="checkbox" name="cuisine"className="align"/>Street food<br/><br/>
                <p className="circle">Cost for Two</p>
                    <input type="radio"name="cost"className="align"/>Less than ₹500 <br/>
                    <input type="radio"name="cost"className="align"/>₹500 to ₹1000<br/>
                    <input type="radio"name="cost"className="align"/>₹1000 to ₹1500<br/>
                    <input type="radio"name="cost"className="align"/>₹1500 to ₹2000<br/>
                    <input type="radio"name="cost"className="align"/>₹2000+<br/><br/>
                <p className="circletwo">sort</p>
                <input type="radio"name="sort"className="align"/>Price low to high<br/>
                <input type="radio"name="sort"className="align"/>Price high to low<br/><br/>
        </div>            
    </div>


    <div className="wrap-containert">
        <div className="right-boxes-container">
            <div className="right-box">
                <div className="row uppersection"><br/>
                     <img src="../Assets/Breakfast.jpg"className="img" alt="Not Found"/>
                            <h3 className="context">The Big Chill Cakery</h3><br/>
                            <h4 className="subcontext">FORT</h4><b/>
                            <p className="text">Shop 1, Plot D, Samunddhi Complex, chinchoi..</p>
                </div>
            </div>


            <div className="row bottomsection">
                <br/>
                <div className="a">
                    CUISINES: <span className="b">Bakery</span>
                </div>
                <div className="a">
                    COST FOR TWO: <span className="c">₹700</span>
                </div>
            </div>
        </div> 
        <div className="right-boxes-container2">
            <div className="right-box">
                <div className="row uppersection"><br/>
                     <img src="../Assets/Lunch.jpg" className="img" alt="Not Found"/>
                            <h3 className="context">The Briyani Shop</h3><br/>
                            <h4 className="subcontext">FORT</h4><br/>
                            <p className="text">Shop 1, Plot D, Samunddhi Complex, chinchoi..</p>
                </div>
            </div>
            <div className="row bottomsection">
                <br/>
                <div className="a">
                    CUISINES: <span className="b">Bakery</span>
                </div>
                <div className="a">
                    COST FOR TWO: <span className="c">₹700</span>
                </div>
            </div>
         {/* ex */}
            

          {/* ex */}
        </div>
    </div>
    <div className="row-page">   
        <div className="pageno">
            <div className="btn"><i class="bi bi-arrow-left-circle-fill"></i></div> <br/> 
            <div className="btn1">1</div> <br/> 
            <div className="btn">2</div> <br/>
            <div className="btn">3</div> <br/>
            <div className="btn">4</div> <br/>
            <div className="btn"> 5</div> <br/>
            <div className="btn"><i class="bi bi-arrow-right-circle-fill"></i></div><br/>
        </div>
    </div>  
</div>  
            </div>
            </div>
        )
    }
}
export default Filter;