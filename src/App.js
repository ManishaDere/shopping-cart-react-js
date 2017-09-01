import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Sectionone from './components/Sectionone';
import Footer from './components/Footer';
import Carausel from './components/Carausel';


class App extends Component {
	constructor(props) {
	    super(props);

	    this.state = { 
        mobiles: []
     } ;
	  }
	componentWillMount(){
	    axios.get('https://api.myjson.com/bins/4xc0c')
	      .then( (response) => { 

	        this.setState({
	        	mobiles:response.data.products,
	        });
		       
	      })
	      .catch(function (error) {
	        // console.log(error);
	      });
	}
	render() {
		console.log("this.context in app.js",this.context);
	  return (
	  		<div className="container-fluid">
		    	<Header />
		    	<Sectionone data={this.state} />
		    	<Carausel />
		    	<Footer />
	    	</div>
	    );
	 }
}
export default App;

