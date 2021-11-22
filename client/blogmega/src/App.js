import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/Login/Login';
import SinglePost from './Pages/SinglePost/SinglePost';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Write from './Pages/Write/Write';

function App() {
    let user;
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                {/* <Route exact path='/posts' element={<Post />} />  //TODO: create a posts page */}
                <Route exact path='/register' element={user ? <Home /> : <Register />} />
                <Route path='/create-post' element={!user ? <Write /> : <Register />} />
                <Route path='/post/:id' element={<SinglePost />} />
            </Routes>
        </Router>
    );
}

export default App;
