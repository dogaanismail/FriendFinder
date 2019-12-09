import { PostActionTypes } from '../actions/post.actions';
const initialState = {
    showPostId: true,
    currentPost: null,
    currentPostId: null,
    posts: [],
    commentPost: null,
    isNewPost: false,
    error: '',
    isNewComment: false
};
export function postReducer(state = initialState, action) {
    switch (action.type) {
        case PostActionTypes.TogglePost:
            return Object.assign({}, state, { showPostId: action.payload });
        case PostActionTypes.SetCurrentPost:
            return Object.assign({}, state, { currentPostId: action.payload });
        case PostActionTypes.LoadSuccess:
            return Object.assign({}, state, { posts: action.payload, error: '' });
        case PostActionTypes.LoadFail:
            return Object.assign({}, state, { posts: [], error: action.payload });
        case PostActionTypes.ClearCurrentPost:
            return Object.assign({}, state, { currentPostId: null });
        case PostActionTypes.InitializeCurrentPost:
            return Object.assign({}, state, { currentPostId: 0 });
        case PostActionTypes.CreatePost:
            return Object.assign({}, state, { isNewPost: true });
        case PostActionTypes.CreatePostSuccess:
            return Object.assign({}, state, { posts: [...state.posts, action.payload].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)), error: '', isNewPost: false });
        case PostActionTypes.CreatePostFail:
            return Object.assign({}, state, { error: action.payload, isNewPost: false });
        case PostActionTypes.CreateComment:
            return Object.assign({}, state, { isNewComment: true });
        case PostActionTypes.CreateCommentSuccess:
            const post = state.posts.filter((item) => item.id == action.payload.postId)[0];
            post.comments.push(action.payload);
            return Object.assign({}, state, { posts: [...state.posts, action.payload], error: '', isNewComment: false });
        case PostActionTypes.CreateCommentFail:
            return Object.assign({}, state, { error: action.payload, isNewComment: false });
        default:
            return state;
    }
}
//# sourceMappingURL=post.reducer.js.map