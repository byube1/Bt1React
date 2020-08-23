import React, { Component } from "react";

class ProCompoment extends Component {
  render() {
    return (
      <div className="col-3 ">
        <div className="card w-100" style={{ width: "18rem" }}>
          <img src={this.props.img} className="card-img-top w-100" alt="..." />
          <div className="card-body">
            <div className="card-text">
              <h4 className="text-center">{this.props.name}</h4>
              <p className="text-center">{this.props.content}</p>
              <div  className="text-center" >
              <button type="button" className="btn btn-primary">Buy</button>
              <button type="button" className="btn btn-secondary">Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProCompoment;
