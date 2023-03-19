import React, { Component, Fragment } from "react";
import { Modal,ModalHeader,ModalFooter,Button} from "reactstrap";
import axios from "axios";

import { API_URL } from "../constants";

class ConfirmRemoval extends Component{
    state = {
        modal : false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    deleteStudent = pk => {
        axios.delete(API_URL+ pk).then(()=>{
            this.props.resetState();
            this.toggle();
        });
    };

    render(){
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>
                    Remove
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>

                    <ModalHeader toggle={this.toggle}>
                        Do you Really wana delete the student?
                    </ModalHeader>
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => this.deleteStudent(this.props.pk)}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        );
    }
}

export default ConfirmRemoval;