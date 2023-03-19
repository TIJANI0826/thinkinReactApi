import React, {Component} from "react";
import { Table } from "reactstrap";
import NewProductModal from "./NewProductModal";

import ConfirmRemoval from "./ConfirmRemoval";

class ProductList extends Component{

    render(){
        const products = this.props.products

        return(
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>price</th>
                        <th>Stocked</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!products || products.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ): (
                        products.map(product => (
                         <tr key={product.pk}>
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td>{product.stocked}</td>
                             <td>{product.category}</td>
                             <td align="center">
                                 <NewProductModal
                                    create={false}
                                    product={product}
                                    resetState={this.props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmRemoval
                                    pk={product.pk}
                                    resetState={this.props.resetState}
                                />
                             </td>
                         </tr>   
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}
export default ProductList