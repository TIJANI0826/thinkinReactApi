import React, { Component } from "react";
import { Col,Container,Row } from "reactstrap";
import axios from "axios";
import ProductList from "./ProductList";
import NewProductModal from "./NewProductModal";
import { API_URL } from "../constants";
import SearchBar from "./SearchBar.js";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            products : []
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);

    };

    componentDidMount(){
        this.resetState();
    }

    getProducts = () => {
        axios.get(API_URL).then(res=> this.setState({ products: res.data }));
    };

    resetState = () => {
        this.getProducts();
    };

    
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }


    render(){
        return(
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                    <SearchBar
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        onFilterTextChange={this.handleFilterTextChange}
                        onInStockChange={this.handleInStockChange}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductList
                            products={this.state.products}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewProductModal create={true} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;