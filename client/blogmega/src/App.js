import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/Login/Login';
import SinglePost from './Pages/SinglePost/SinglePost';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Write from './Pages/Write/Write';
import Posts from './Pages/Posts/Pages';
import Profile from './Pages/Profile/Profile';
import { Context } from './Context/Context';
import { useContext } from 'react';

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route path='posts/posts/:id' element={<SinglePost />} />
                <Route exact path='/posts' element={<Posts />} />
                <Route exact path='/profile' element={user ? <Profile /> : <Login />} />
                <Route exact path='/register' element={user ? <Home /> : <Register />} />
                <Route path='/create-post' element={user ? <Write /> : <Register />} />
            </Routes>
        </Router>
    );
}

export default App;
