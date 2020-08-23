import React, { Component } from "react";
import Pro1 from "../../img/promotion_1.png";
import Pro2 from "../../img/promotion_2.png";
import Pro3 from "../../img/promotion_3.jpg";

class Footer extends Component {
  render() {
    return (
        
      <div className="bg-dark">
        <h3 className="text-center text-white"> PROMOTION</h3>
        <div className="container">
          <div className="row m-1 bg-light">
            <div className="col-4 p-4">
              <img src={Pro1} alt="anh" className="w-100" />
            </div>
            <div className="col-4 p-4">
              <img src={Pro2} alt="anh" className="w-100" />
            </div>
            <div className="col-4 p-4">
              <img src={Pro3} alt="anh" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
