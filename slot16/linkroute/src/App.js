import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <Navigation />
      <Container >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />  {/* Trang danh sách bài viết */}
        <Route path="/post/:id" element={<PostDetail />} />  {/* Trang chi tiết bài viết */}
      </Routes>
      </Container>
    </div>
  );
}

export default App;
