import React, { Component } from 'react';
import DisplayMobiles from './DisplayMobiles';


class Searchform extends Component {
	constructor(props){
		super(props);
		this.state = {
			dataSearched:[]
		}
		this.searchMobile = this.searchMobile.bind(this);
	}
	searchMobile(e){
		var dataSearched1 = [];	
		var that =this;	
        	that.props.data.data.mobiles.map((mobile, i) =>{
        		if(that.refs.title.value){
	        		if(that.refs.title.value === mobile.title){
	        			that.state.dataSearched.push(mobile);
	        			//that.setState({ dataSearched: dataSearched1 });
	        				console.log(that.state.dataSearched,"***")
	        		}
	        		return(
	        				<DisplayMobiles data1={this.state}/>
	        			);
	        	}
        	});
      	e.preventDefault(); 
	}
	render() {
		console.log("in searchform",this.props);
	  	return (
		        <form onChange={this.searchMobile.bind(this)}>
		    	  <label>Search
		          <input type="text" ref = "searchInput" className="form-control" name="search-input" placeholder="Search" ref="title"/> 
		          </label>
		          
		       	</form>
		    );
	 }
}
export default Searchform;



























