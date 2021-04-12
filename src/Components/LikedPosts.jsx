import React from 'react';
import { connect } from 'react-redux';
import { PostActions } from '../Container/PostAction';
import { Link } from 'react-router-dom';
import * as Action from '../Redux/Actions';
import { bindActionCreators } from 'redux';
import '../App.css'

const LikedPosts = (props) => {
  const { Liked_Post, select_post } = props;
  return (
    <>

      <div>
        {Liked_Post.length > 0 ? Liked_Post.map(post => {
          return (
            <div class="row" key={post.id}>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title" style={{ fontWeight: "500", marginBottom: "2rem" }}>({post.id}.) Title : {post.title}</span>
                    <p style={{ fontSize: "1.75rem" }}>Post Body : {post.body}</p>
                  </div>

                </div>
              </div>
              <hr />
            </div>

          )
        }) : <h2 className="heading">'No Liked Posts'</h2>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    Liked_Post: state.like_result ? state.like_result : []
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    select_post: bindActionCreators(Action, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedPosts);