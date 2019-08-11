import React from 'react';
import './search.styles.scss';
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/search/search.actions';
import { searchUser } from "../../redux/user/user.actions";
import { searchPost } from "../../redux/post/post.actions";

class Search extends React.Component{
    render(){
        const { onSetSearchField, onSearchUser, onSearchPost, search } = this.props;
        return (
            <div className="search-container">
                {
                    search === 'user:' ? 
                        <input className="search-box-user" id="user" type="text" onChange={onSearchUser} /> :
                    search === 'post:' ?
                        <input className="search-box-post" id="post" type="text" onChange={onSearchPost} /> 
                        :
                        <input className="search-box-default" type="text" onChange={onSetSearchField} />
                }
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSearchField: (event) => dispatch(setSearchField(event.target.value)),
        onSearchUser: (event) => dispatch(searchUser(event.target.value)),
        onSearchPost: (event) => dispatch(searchPost(event.target.value)),
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);