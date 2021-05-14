import React, { Component } from 'react';

class Bottle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "France",
            region: "Bordeaux",
            name: "Petrus",
            year: "1970",
            color: "rouge"
         }
    }

    headercolor() {

        if (this.state.color == "rouge") {
            return "background-red";
                
        } else if (this.state.color == "blanc") {
            return "background-white";
        } else {
                return "background-pink";
            } 
    }

    render() { 
        return (
            <React.Fragment>
                {
                    <div className="card bottlecard mb-3">
                        <div className="card-header bg-transparent">
                            <div className={this.headercolor()}>Country: {this.state.country}
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <p className="card-text">{this.state.year}</p>
                            <p className="card-text">{this.state.region}</p>
                        </div>
                        <div className="card-footer bg-transparent">
                            <button className="btn btn-primary">Ok</button>
                            <button className="btn btn-warning">Update</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                }
            </React.Fragment>
         );
    }
}
 
export default Bottle;