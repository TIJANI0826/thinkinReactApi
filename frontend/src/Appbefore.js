import './App.css';
import React, {Component,Fragment} from 'react';
import { Modal,ModalHeader,ModalBody ,ModalFooter,Button} from "reactstrap";
import axios from "axios";
import {API_URL} from './constants';

// class ProductCategoryRow extends Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       modal : false
//     };
//   }
//   addToCart = () => {
//     alert(`${this.props.product.price}
//     ${this.props.product.name}`);
//   }

//   toggle = () => {
//     this.setState(previous => ({
//         modal : !previous.modal
//     }));
//   };

  
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;
//     const modalOpen = (
    
//       <Fragment>
//         <Modal isOpen={this.state.modal} toggle={this.toggle}>

//       <ModalHeader toggle={this.toggle}>BUY</ModalHeader>
//       <ModalBody>
//           <div>
//             <form>
//               <label>Name</label><input type='text'></input>
//             </form>
//           </div>
//       </ModalBody>
//       </Modal>
//       </Fragment>
//     ); 

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>${product.price}</td>
//         <button type='button' onClick={this.toggle}>Buy</button>
//         <button type='button' onClick={this.addToCart}>Add to Cart</button>
//         {modalOpen}
//       </tr> 
//     )
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
  
//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }
  
//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }
  
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

//  export default class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false,
//       products : []
//     };
    
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   componentDidMount(){
//     this.resetState();
// }

//   async getProducts() {
//     await axios.get(API_URL).then(res=> this.setState({products : res.data}))
//   };

//   resetState = () => {
//     this.getProducts();
// };

//   handleFilterTextChange(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }
  
//   handleInStockChange(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }

//   render() {
    
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange={this.handleFilterTextChange}
//           onInStockChange={this.handleInStockChange}
//         />
//         <ProductTable
//           products={this.state.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }

// const API_URL = 'http://127.0.0.1:8000/api/product/'
// let PRODUCT = [];
// function getProducts() {
//   axios.get(API_URL).then(res=> { for (let index = 0; index < res.data.length; index++) {
//     PRODUCT.push(res.data[index])
//   }});
// };
// getProducts();
// // console.log(getProducts);
// export const PRODUCTS = PRODUCT;
// export const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// const root = React.ReactDOM.createRoot(document.getElementById('container'));
// root.render(<FilterableProductTable products={PRODUCTS} />)