import React from 'react';
import './App.css';
import User from './components/user/user.component';
import Post from './components/post/post.component';
import Search from './components/search/search.component';

class App extends React.Component {
  render(){
    return (
      <div>
        <Search />
        <div className="container">
          <User />
          <Post />
        </div>
      </div>
    )
  }
}

export default App;
