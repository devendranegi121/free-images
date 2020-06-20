import React, { Component } from 'react';
import Submenu from './subMenu'

class header extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu=[
                
            ]
        }
       
    } 
    render() { 
         
        return (

            <div className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <a className="navbar-brand" href="#">{this.props.brandName}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto">
                             
                        </ul>
                    </div>
                </div></div>
        );
    }
}

export default header;