import React from 'react';
import { connect } from 'react-redux';
import { PostActions } from '../Container/PostAction';
import * as Action from '../Redux/Actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {

  const { Searched_Result, select_post } = props;

  return (
    <div>
      {Searched_Result.map(post => {
        return (
          <div className="row" key={post.id}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title" style={{ fontWeight: "500", marginBottom: "2rem" }}>({post.id}.) Title : {post.title}</span>
                  <p style={{ fontSize: "1.75rem" }}>Post Body : {post.body}</p>
                </div>
                <div className="card-action">
                  <button className="waves-effect waves-light btn-small likebtn" onClick={() => PostActions(select_post, 'LikedPosts', post)}>Like</button>
                  <button className="waves-effect waves-light btn-small dislikebtn" onClick={() => PostActions(select_post, 'DislikedPosts', post)}>Dislike</button>
                  <Link className="waves-effect waves-light btn-small likebtn" to='/deletePost'>DeltePost</Link>
                  <Link className="waves-effect waves-light btn-small likebtn" to='/updatePost'>UpdatePost</Link>
                </div>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Searched_Result: state.search_result
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    select_post: bindActionCreators(Action, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);