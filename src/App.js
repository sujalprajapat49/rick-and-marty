import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route,Link } from "react-router-dom"
import Post from './Post';
import Comment from './Comment';
import Album from './Album';
import Photos from './Photos';
import Todo from './Todo';
import User from './User';
function App() {
  
  return (
    <div className="App">
      <Link to="/" >POST</Link>
      <Link to="/comment" >COMMENT</Link>
      <Link to="/album" >ALBUM</Link>
      <Link to="/photos" >PHOTOS</Link>
      <Link to="/todo" >TODO</Link>
      <Link to="/user" >USER</Link>
      <Routes>
        <Route path='/' element={<Post/>}/>
        <Route path='/comment' element={<Comment/>}/>
        <Route path='/album' element={<Album/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>

    </div>
  );
}

export default App;
