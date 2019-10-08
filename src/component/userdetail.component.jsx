import React from 'react';
import { Modal } from 'react-bootstrap';

class UserDetail extends React.Component {
    render() {
        return <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>User Detail</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{this.props.userDetail.name}</p>
            </Modal.Body>
        </Modal.Dialog>
    }
}

export default UserDetail;