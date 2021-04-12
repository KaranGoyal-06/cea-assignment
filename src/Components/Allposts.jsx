import React, { Component } from 'react';
import { instance } from '../index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Action from '../Redux/Actions';
import { Link } from 'react-router-dom';
import { PostActions } from '../Container/PostAction';
import '../App.css';

class Allposts extends Component {

  state = {
    posts: [],
    select_obj: this.props.select_post
  };

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    try {

      let post_data = await instance.get('/posts');
      if (post_data) {
        this.setState({ posts: [...post_data.data] });
      }
    } catch (error) { alert('Oops! Something Went Wrong') }
  }
  render() {
    return (
      <>
        <h1 className="heading">All Posts</h1>
        { this.state.posts.map(post => {
          return (


            <div className="row" key={post.id} >

              <div className="col s12 m12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title" style={{ fontWeight: "500", marginBottom: "2rem" }}>({post.id}.) Title : {post.title}</span>
                    <p style={{ fontSize: "1.75rem" }}>Post Body : {post.body}</p>
                  </div>
                  <div className="card-action">
                    <button className="waves-effect waves-light btn-small likebtn" onClick={() => PostActions(this.state.select_obj, 'LikedPosts', post)}>Like</button>
                    <button className="waves-effect waves-light btn-small dislikebtn" onClick={() => PostActions(this.state.select_obj, 'DislikedPosts', post)}>Dislike</button>
                    <Link className="waves-effect waves-light btn-small viewpost" to='/SearchedPost' onClick={() => PostActions(this.state.select_obj, 'SearchActions', post)}>View Post</Link>
                  </div>
                </div>
              </div>
              <hr />
            </div>

          )
        })
        }
      </>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    All_posts: state.all_posts ? state.all_posts : [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    select_post: bindActionCreators(Action, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allposts);