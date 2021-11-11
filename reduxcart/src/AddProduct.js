import React, { Component } from "react";

class AddProduct extends Component {
    state = {
        productName: '',
        productPrice: 0
    }

    productNameChangedHandler = (event) =>{
        this.setState({productName: event.target.value});
    }
}