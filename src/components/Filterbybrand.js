import React, { Component } from 'react';

class Filterbybrand extends Component {
render() {
  return (
  		<div>
        <p>Filter By Brands</p>
        <input type="checkbox" name="brand" /><span>Apple</span><br />
        <input type="checkbox" name="brand" /><span>Samsung</span><br />
        <input type="checkbox" name="brand" /><span>Nokia</span><br />
        <input type="checkbox" name="brand" /><span>Micromax</span>
      </div>
    );
 }
}
export default Filterbybrand;









