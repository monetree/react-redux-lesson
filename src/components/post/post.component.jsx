import React from 'react';
import './post.styles.scss';
import { connect } from 'react-redux';
import { requestPosts } from '../../redux/post/post.actions';


class Post extends React.Component {

  componentWillMount(){
    this.props.onRequestPosts()
  } 

  render(){
    const { posts, isPending, postsearch=''  } = this.props;
    const filteredPosts= posts.filter(post => {
      return post.title.toLowerCase().includes(postsearch.toLowerCase());
  })  
    return (
        <div className="post-wrapper">
            {isPending ? <h1>Loading</h1> :
              filteredPosts.map((post, id) => {
                return (
                  <div className="post-card" key={id}>
                    {post.title}
                  </div>  
                )
              })
            }
      
        </div>
    )
  }
}

const removePostTag = (usersearch) => {
  try{
    if(usersearch){
      return usersearch.split(":")[1].toString()
    }
  }catch{
    return
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    isPending: state.post.isPending,
    postsearch: removePostTag(state.postsearch.searchField)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPosts: () => dispatch(requestPosts())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post)
