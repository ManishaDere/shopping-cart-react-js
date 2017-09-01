import React, { Component } from 'react';
import Header from './Header';

class Footer extends Component {
render() {
  return (
          <div className="navbar">
	        <div className="container">
	          <div className="navbar-footer">
	            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#footer">
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            </button>
	          </div>
	          <div className="navbar-collapse collapse in" id="footer">
	            <ul className="nav navbar-nav navbar-center">
	              <li><a href="#" onClick={this.noData}>Privacy</a></li>
	              <li><a href="#" onClick={this.noData}>Policy</a></li>
	              <li><a href="#" onClick={this.noData}>T & C</a></li>
	            </ul>
	          </div>
	        </div>
	      </div>
    );
 }
}
export default Footer;
















