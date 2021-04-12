import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';
import Toolbar from './Toolbar';
import AllPosts from './Allposts';
import LikedPosts from './LikedPosts';
import DislikedPosts from './DislikedPosts';
import SearchPost from './SearchPost';
import SearchResult from './SearchResult';


const Home = () => {
    return (
        <div>
            <Toolbar />

            <Switch>
                <Route path="/" exact component={AllPosts} />
                <Route path="/createPost" exact component={CreatePost} />
                <Route path="/deletePost" exact component={DeletePost} />
                <Route path="/updatePost" exact component={UpdatePost} />
                <Route path="/dislikedPost" exact component={DislikedPosts} />
                <Route path="/likedPost" exact component={LikedPosts} />
                <Route path="/SearchedPost" exact component={SearchResult} />
            </Switch>
        </div>
    );
};

export default Home;