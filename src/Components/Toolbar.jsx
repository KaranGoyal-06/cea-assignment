import React from 'react';
import { Link } from 'react-router-dom';
import SearchPost from './SearchPost';

const Toolbar = () => {
    return (
        <div className="nav-wrapper">
            <nav>
                <ul className="left hide-on-med-and-down">
                    <li ><Link to='/createPost' style={{ fontSize: "1.75rem" }}>Create Post</Link></li>
                    <li><Link to='/' style={{ fontSize: "1.75rem" }}>All Posts</Link></li>
                    <li><Link to='/likedPost' style={{ fontSize: "1.75rem" }}>Liked Posts</Link></li>
                    <li><Link to='/dislikedPost' style={{ fontSize: "1.75rem" }}>Disliked Posts</Link></li>

                </ul>
                <ul className="right hide-on-med-and-down" style={{ marginRight: "1rem" }}><li><SearchPost /></li></ul>
            </nav>
        </div>
    );
};

export default Toolbar;