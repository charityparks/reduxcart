import React, { Component } from "react";

class AddProduct extends Component {
    state = {
        productName: '',
        productPrice: 0
    }

    productNameChangedHandler = (event) =>{
        this.setState({productName: event.target.value});
    }
    productPriceChangedHandler = (event) =>{
        this.setState({productPrice: event.target.value});
    }
    render() {
        return(
            <div className="container">
                
            </div>
        )
    }
}