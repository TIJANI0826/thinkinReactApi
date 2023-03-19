import React from "react";
import { Button,Form,FormGroup,Input,Label} from "reactstrap";
import axios from "axios";

import { API_URL } from "../constants";

class NewProductForm extends React.Component{

    state = {
        pk:0,
        name:"",
        price: "",
        stocked: "",
        category:"",
    };

    componentDidMount(){
        if (this.props.product){
            const { pk, name, price, stocked, category } = this.props.product;
            this.setState({ pk, name, price, stocked, category });
        }
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createProduct = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editProduct = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk,this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render(){
        return(
            <Form onSubmit={this.props.product ? this.editProduct : this.createProduct}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price:</Label>
                    <Input
                        type="text"
                        name="price"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.price)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="stocked">Stocked:</Label>
                    <Input
                        type="text"
                        name="stocked"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.stocked)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category:</Label>
                    <Input
                        type="text"
                        name="category"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.category)}
                    />
                </FormGroup>

                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewProductForm;
