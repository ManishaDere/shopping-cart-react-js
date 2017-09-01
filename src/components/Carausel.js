import React, { Component } from 'react';


class Carausel extends Component {
render() {
  return (
          <div className="releted-items container">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <h1 className="text-center">Related Items</h1>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <img src="../images/1.jpeg" alt="Apple"className="img-responsive center-block" alt="Apple"/>
                      <p className="text-center">Micromax</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <img src="../images/2.jpeg" alt="Asus" className="img-responsive center-block" alt="Asus"/>
                      <p className="text-center">Apple</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <img src="../images/1.jpeg" alt="Micromax" className="img-responsive center-block" alt="Micromax"/>
                      <p className="text-center">Samsung</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <img src="../images/4.jpeg" alt="Motorola" className="img-responsive center-block" alt="Motorola"/>
                      <p className="text-center">Asus</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <img src="../images/5.jpeg"  alt="Nokia" className="img-responsive center-block" alt="Nokia"/>
                      <p className="text-center">Lenevo</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <img src="../images/6.jpeg"  alt="SamsungJs" className="img-responsive center-block" alt="SamsungJs"/>
                      <p className="text-center">Nokia</p>
                    </div>
                  </div>
                </div>      
              </div>
              <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
    );
 }
}
export default Carausel;




