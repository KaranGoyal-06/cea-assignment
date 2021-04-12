const Reducer = (state = [], action) => {
    switch (action.type) {

        case 'searchResult':
            return {
                ...state, search_result: action.payload
            }
            break;

        case 'likeResult':
            return {
                ...state, like_result: state.like_result ? action.payload.concat(state.like_result) : action.payload
            }
            break;

        case 'dislikeResult':
            return {
                ...state, dislike_result: state.dislike_result ? action.payload.concat(state.like_result) : action.payload
            }
            break;

        case 'get_post':
            return {
                ...state, all_posts: action.payload
            }
            break;

        default: return state;
    }
}

export default Reducer;
