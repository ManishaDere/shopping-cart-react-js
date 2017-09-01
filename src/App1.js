import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
class App extends Component {
  constructor(props)
   {
    super(props)
    this.state = {
      posts: []
    }
    this.addPost = this.addPost.bind(this);
  }
addPost(e){
  axios.post('/posts', {id:32323,title:'M',userId:3, body:"dfgdjhgdfhdhfgvjhf"})
    .then((response) => {
      this.setState({
      posts: response.data
    })
      console.log(this.state.posts);
    })
    .catch(function (error)
     { 
        console.log(error);
     });
}
componentWillMount () 
{
  axios.get('/posts').then((response) => {
    this.setState({
      posts: response.data
    })
    console.log(response.data);
  })
  .catch(function (error) {}
  );
  
}
render() {
  let posts = this.state.posts.map((post, i) => {
    return( <li key={i}>{post.title}</li>)
  });
  return (
    <div>
      <button onClick={this.addPost}>addPost</button>
      <ul>
       {posts}
      </ul>
    </div>
    );
 }
}
export default App;

