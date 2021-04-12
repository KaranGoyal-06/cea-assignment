import React, { useState } from 'react';
import { instance } from '../index';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    const createPost = async () => {
        try {

            let data = { title, body }
            const response = await instance.post('/posts', data);
            if (response) {
                console.log(response)
                alert('Post Created Succesfully')
                history.push('/');
            }
        } catch (error) {
            alert('Post creation failed.');
        }
    }

    return (
        <div>
            <h2 className="heading1">Create Post</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <textarea id="title" placeholder="Title" style={{ marginLeft: "9rem" }} className="materialize-textarea" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
                            <label htmlFor="title" style={{ color: "tomato", fontWeight: "500", fontSize: "1.5rem" }}>Enter Title</label>
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



            <button className="waves-effect waves-light btn-small createbtn" onClick={createPost}>Create Post</button>
        </div>
    );
};

export default CreatePost;