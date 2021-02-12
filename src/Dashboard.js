import React, { Component } from 'react';
import Modal from './Modal';
import Snackbar from './Snackbar';
import Button from '@material-ui/core/Button';
class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }

    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }

    render() {
      return (
        <div className="container">
          <h1>React Modal  and Snackbars using Material UI</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Are you sure you want to proceed? </p>
           
          </Modal>
          <Button  className='item button' variant="outlined"   onClick={this.showModal}>
            Open
          </Button>
          <Snackbar />
        </div>
      )
      }
}

export default Dashboard;