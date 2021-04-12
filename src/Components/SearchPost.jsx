import React, { useState } from 'react';
import { instance } from '../index';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as Actions from '../Redux/Actions';
import '../App.css';

const SearchPost = (props) => {

    const { Search_Post } = props;
    const history = useHistory();

    const [Id, setId] = useState();
    const [option, setOption] = useState('title');

    const SearchPost = () => {
        instance.get(`/posts?${option}=${Id}`)
            .then((response) => {
                Search_Post.SearchActions(response.data)
                history.push('/SearchedPost');
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i onClick={SearchPost} className="material-icons prefix" style={{ fontSize: "2.5rem" }}>search</i>
                            <input className="search-input" placeholder='Enter title to search' type='text' value={Id} onChange={(e) => setId(e.target.value)} />

                            <select onChange={(e) => setOption(e.target.value)} >
                                <option value='title'>Title</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

const mapDispatchToProps = (dispatch) => {

    return {
        Search_Post: bindActionCreators(Actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchPost);