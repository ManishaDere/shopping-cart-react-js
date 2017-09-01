import React, { Component } from 'react';
import Searchform from './Searchform';
import Filterbytype from './Filterbytype';
import Filterbybrand from './Filterbybrand';
import Filterbyos from './Filterbyos';
import DisplayMobiles from './DisplayMobiles';
import Cartdetails from './Cartdetails';
import axios from 'axios';

class Sectionone extends Component {
  constructor(props){
      super(props);
      this.state = {
        
      }
  }

  render() {
   console.log("Sectionone props", this.props);
    return (  
			<div className="row">         
				<div className="col-xs-2 col-sm-2 col-md-2 column-left">
					<Searchform data={this.props}/>
					<Filterbytype />
        	<Filterbybrand />
        	<Filterbyos />
				</div>   
        {this.props.data.searchFlag == false && (     
          <DisplayMobiles data={this.props} />		
        )}
					<Cartdetails />      
			</div>            
      );
   }
}

export default Sectionone;
