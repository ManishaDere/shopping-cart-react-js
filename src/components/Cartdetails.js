import React, { Component } from 'react';

class Cartdetails extends Component {
render() {
  return (
          <div className="col-xs-12 col-sm-2 col-md-2">
            <h3>Cart Details</h3>
            <br />
            <p>myCart products length items in cart</p>
            <div>
              <img  className="img-responsive selected-img" src="product-url"/>
              <span className="badge size-img-cart">
                 x product.qty
              </span>s
              <p>product price  currency</p>          
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-plus"></span>
              </button>
              <button className=" btn btn-default">
                <span className="glyphicon glyphicon-minus"></span>
              </button>
              <button className=" btn btn-default">
                <span className="glyphicon glyphicon-remove-circle"></span>
              </button>
              <p>product amount</p>
            </div>
          <br />
          <p>Total Quantity: myCart totalQty</p>
          <p>Total Amount: myCart totalAmount </p>
          <button className="btn btn-default btn-lg" data-toggle="modal" data-target="#checkOutModal">
             <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
              Checkout
          </button>
        </div>
  					
    );
 }
}
export default Cartdetails;

