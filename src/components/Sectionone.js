import React, { Component } from 'react';
import Filterbytype from './Filterbytype';
import Filterbybrand from './Filterbybrand';
import Filterbyos from './Filterbyos';
import Cartdetails from './Cartdetails';
import axios from 'axios';


class Sectionone extends Component {
  constructor(props){
      super(props);
      this.state = {
        dataSearched:[],
        searchFlag:false        
      }
      this.searchMobile = this.searchMobile.bind(this);
  }
  searchMobile(e){
    var that = this; 
    let productItems;
          that.props.data.mobiles.map((mobile, i) =>{

            if(that.refs.title.value){

              if(that.refs.title.value === mobile.title){
                that.state.dataSearched.push(mobile);
                console.log(that.state.dataSearched,"***")
                that.state.searchFlag = true;
                console.log(that.state.searchFlag);
              }
              return(
                  productItems = that.state.dataSearched.map((mobile,id) => {
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
                  })
                );
            }
          });
        e.preventDefault(); 
  }
  render(){
      let productItems;
      console.log("in render", this.state.searchFlag);
      productItems = this.props.data.mobiles.map((mobile,id) => {
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
  return(
    <div className="row">         
      <div className="col-xs-12 col-sm-2 col-md-2 column-left">
        <form onChange={this.searchMobile.bind(this)}>
          <label>Search
            <input type="text" ref = "searchInput" className="form-control" name="search-input" placeholder="Search" ref="title"/> 
          </label>              
        </form>
        <Filterbytype />
        <Filterbybrand />
        <Filterbyos />
      </div>        
      <div className="col-xs-12 col-sm-8 col-md-8">
        <h4 className="text-center ">Showing products length in Mobiles</h4>
          <div className="row">
            {productItems}
          </div>
      </div>    
      <Cartdetails />      
    </div>      
  );
}
}
export default Sectionone;


