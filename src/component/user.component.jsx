import React from 'react';
import { connect } from 'react-redux';
// import UserDetail from './userdetail.component';
import { Redirect } from 'react-router-dom';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            viewProducts: false,
            userDetail: {}
        }
        this.showUserDetail = this.showUserDetail.bind(this);
        this.viewProducts = this.viewProducts.bind(this);
    }
    showUserDetail(userDetail) {
        this.setState({
            showModal: true,
            userDetail
        })
    }
    viewProducts() {
        this.setState({
            viewProducts: true
        })
    }

    render() {
        return <div>
            <button onClick={this.viewProducts}>View Products</button>
            {this.props.userLoginDetails && this.props.userLoginDetails.userDetail &&
                this.props.userLoginDetails.userDetail.map((userDetail, index) => {
                    return <div className="card" style={{ width: '18rem' }} key={index}>
                        <img className='card-img-top' src={userDetail.avatar} alt='profilepic' id={index} />
                        <div className="card-body" id={index}>
                            <h5 className="card-title" id={index}>{userDetail.name}</h5>
                            <button onClick={() => this.showUserDetail(userDetail)}>View Details</button>
                        </div>
                    </div>
                })
            }
            {this.state.viewProducts && <Redirect to='/products'></Redirect>}
            {/* {this.state.showModal && <UserDetail userDetail={this.state.userDetail} />} */}
        </div>
    }
}

const mapStateToProps = (state) => ({
    userLoginDetails: state.loginReducer.userLoginDetails
})
export default connect(mapStateToProps)(UserComponent);