import React, { Component} from "react";
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

class Cart extends Component {
    render() {
        <div className="container">
            <AddProduct addProduct={this.props.onAddProduct}/>
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.productCart.map(productData => (
                        <tr key={productData.productName}>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        
        </div>
    }
}