import React, { useState } from 'react';
import { instance } from '../index';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../App.css';

const UpdatePost = (props) => {

    const { Searched_Result } = props;
    const history = useHistory();
    const [title, setTitle] = useState(`${Searched_Result[0].title}`);
    const [body, setBody] = useState(`${Searched_Result[0].body}`);

    const updatePost = async () => {
        try {
            let data = { title, body }
            const response = await instance.put(`/posts/${Searched_Result[0].id}`, data);
            if (response) {
                console.log(response)
                alert('Post updated Successfully!!!')
                history.push('/');
            }
        } catch (error) {
            alert('Post update failed.');
        }

    }

    return (
        <div>
            <h2 className="heading1">Update Post</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <textarea id="title" placeholder="Title" style={{ marginLeft: "9rem", marginTop: "2rem" }} className="materialize-textarea" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
                            <label htmlFor="title" style={{ color: "tomato", fontWeight: "500", fontSize: "1.5rem", marginTop: "2rem" }}>Enter Title</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field col s6">
                            <textarea id="body" placeholder="Body" style={{ marginLeft: "9rem" }} className="materialize-textarea" type="text" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                            <label htmlFor="body" style={{ color: "tomato", fontWeight: "500", fontSize: "1.5rem" }}>Enter Body</label>
                        </div>
                    </div>
                </form>
            </div>
            <button onClick={updatePost} className="waves-effect waves-light btn-small createbtn">Submit</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        Searched_Result: state.search_result
    }
}

export default connect(mapStateToProps, null)(UpdatePost);