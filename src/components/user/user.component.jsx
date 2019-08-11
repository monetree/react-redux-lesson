import React from 'react';
import './user.styles.scss';
import { connect } from 'react-redux';
import { requestUsers } from '../../redux/user/user.actions';


class User extends React.Component {

  componentWillMount(){
    this.props.onRequestUsers();
  }

  render(){
    const { users, isPending, usersearch='' } = this.props;
    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(usersearch.toLowerCase());
    })  

    return (
        <div className="wrapper">
        {
          isPending ? <h1>Loading</h1> :
          filteredUsers.map((user,id) => {
                return (
                  <div key={id}>
                  {
                    <div className="card">
                      {user.name}
                    </div>  
                  }
                  </div>
                               
                )
            })
        }  
        </div>
    )
  }
}

const removeUserTag = (usersearch) => {
  try{
    if(usersearch){
      return usersearch.split(":")[1].toString()
    }
  }catch{
    return
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
    isPending: state.user.isPending,
    usersearch: removeUserTag(state.usersearch.searchField)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)
