import React, { Component } from 'react';

class Header extends Component {
  noData(){
    alert("No data available");
  }

render() {
  return (
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Krx Ecom</a>
              </div>
              <div className="navbar-collapse collapse in" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-center">
                  <li className="active"><a href="#">Mobiles</a></li>
                  <li><a href="#" onClick={this.noData}>Men</a></li>
                  <li><a href="#" onClick={this.noData}>Women</a></li>
                  <li><a href="#" onClick={this.noData}>Electronic</a></li>
                  <li><a href="#" onClick={this.noData}>Home & Kitchen</a></li>
                  <li><a href="#" onClick={this.noData}>Baby & Kids</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                      <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-shopping-cart "></span>View Cart
                        <span>myCart.totalQty</span>
                      </button>                        
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    );
 }
}
export default Header;

