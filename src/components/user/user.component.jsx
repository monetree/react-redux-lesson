import React from 'react';
import './user.styles.scss';
import { connect } from 'react-redux';
import { requestUsers } from '../../redux/user/user.actions';


class User extends React.Component {

  componentWillMount(){
    this.props.onRequestUsers();
  }

  render(){
    const { users, isPending } = this.props;
    return (
        <div className="wrapper">
        {
          isPending ? <h1>Loading</h1> :
            users.map((user,id) => {
                return (
                    <div className="card" key={id}>
                        {user.name}
                    </div>              
                )
            })
        }  
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUsers: () => dispatch(requestUsers())
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    isPending: state.user.isPending
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)
