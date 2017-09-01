import React, { Component } from 'react';
import axios from 'axios';

class DisplayMobiles extends Component {
 
render() {
  console.log("In DisplayMobilessss", this.props);
    let productItems;
    if(this.props){
      productItems = this.props.data.data.mobiles.map((mobile,id) => {
        console.log(mobile);
        return(
            <div className="col-xs-12 col-sm-4 col-md-4 text-center">
              <img key={id} src={mobile.image} class="img-responsive center-block"/>
              <p>{mobile.title}</p>
              <p>Rs.{mobile.price}</p>
              <button>
                <span className="glyphicon glyphicon-shopping-cart "></span>
                Add
              </button>
            </div>  
          );
      });
    }
  return (
  		<div className="col-xs-8 col-sm-8 col-md-8">
        <h4 className="text-center ">Showing products length in Mobiles</h4>
          <div className="row">
            {productItems}
          </div>
      </div>
      
    );
 }
}
export default DisplayMobiles;


