import React from 'react';
import { instance } from '../index';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const DeletePost = (props) => {

  const { Searched_Result } = props;
  const history = useHistory();

  const deletePost = async (id) => {
    try {
      const response = await instance.delete(`/posts/${id}`);
      if (response) {
        alert('Post deleted Successfully!!!');
        console.log(response)
        history.push('/');

      }
    } catch (error) {
      alert('Post delete failed.');
    }

  }

  return (
    <div>
      {Searched_Result.map((post) => {
        return (
          <div className="row" key={post.id}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title" style={{ fontWeight: "500", marginBottom: "2rem" }}>({post.id}.) Title : {post.title}</span>
                  <p style={{ fontSize: "1.75rem" }}>Post Body : {post.body}</p>
                </div>
                <div className="card-action">
                  <button onClick={() => deletePost(post.id)} className="waves-effect waves-light btn-small likebtn">Delete Post</button>
                </div>
              </div>
            </div>
            <hr />
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

export default connect(mapStateToProps, null)(DeletePost);