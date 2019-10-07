import React from 'react';
import { connect } from 'react-redux';
import UserDetail from './userdetail.component';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.showUserDetail = this.showUserDetail.bind(this);
    }
    showUserDetail() {
        this.setState({
            showModal: true
        })
    }

    render() {
        return <div>
            {this.props.userLoginDetails && this.props.userLoginDetails.userDetail &&
                this.props.userLoginDetails.userDetail.map((userDetail, index) => {
                    return <div className="card" style={{ width: '18rem' }} key={index}>
                        <img className='card-img-top' src={userDetail.avatar} alt='profilepic' id={index} />
                        <div className="card-body" id={index}>
                            <h5 className="card-title" id={index}>{userDetail.name}</h5>
                            <button onClick={this.showUserDetail}>View Details</button>
                        </div>
                    </div>
                })
            }
            {this.state.showModal && <UserDetail />}
        </div>
    }
}

const mapStateToProps = (state) => ({
    userLoginDetails: state.loginReducer.userLoginDetails
})
export default connect(mapStateToProps)(UserComponent);