import React from 'react';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        <li><Link to="/post/1">Post 1</Link></li>
        <li><Link to="/post/2">Post 2</Link></li>
        <li><Link to="/post/3">Post 3</Link></li>
      </ul>
    </div>
  );
}

export default Post;
