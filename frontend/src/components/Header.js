/* eslint-disable jsx-a11y/img-redundant-alt */
import React , { Component } from 'react';

class Header extends Component {

    render(){
        return(
            <div className="text-center">
                <img 
                   src="https://logrocket-assets.io/img/logo.png"
                   width="300"
                   className="img-thumbnail"
                   style={{ marginTop : "20px" }}
                   alt="IMAGE OF ISCHOLARS"
                />
                <hr/>
                <h5>
                    <i>presents</i>
                </h5>
                <h1>STUDENTS</h1>

            </div>
        );
    }
}

export default Header;