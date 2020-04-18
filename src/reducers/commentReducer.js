export const initialCommentState = {
    commentsList: []
};

export const CommentsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
              commentsList: action.payload.comments
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                [action.comment.id]: action.comment
            };
        case 'DELETE_COMMENT':
            return {
                commentsList: state.commentsList.filter((id) => id !== action.comment.id)
            }
        default:
            return state;
    }
};
