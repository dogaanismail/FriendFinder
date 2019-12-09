import { createFeatureSelector, createSelector } from '@ngrx/store';
const getPostFeatureState = createFeatureSelector('posts');
export const getShowPostId = createSelector(getPostFeatureState, state => state.showPostId);
export const getCurrentPostId = createSelector(getPostFeatureState, state => state.currentPostId);
export const getPosts = createSelector(getPostFeatureState, state => state.posts);
export const getIsNewPost = createSelector(getPostFeatureState, state => state.isNewPost);
export const getIsNewComment = createSelector(getPostFeatureState, state => state.isNewComment);
export const getCurrentPost = createSelector(getPostFeatureState, getCurrentPostId, (state, currentPostId) => {
    if (currentPostId === 0) {
        return {
            Id: 0,
            text: "",
            createdByUserName: "",
            createdByUserPhoto: "",
            imageUrl: "",
            videoUrl: "",
            createdDate: null,
            postType: null,
            comments: null
        };
    }
    else {
        return currentPostId ? state.posts.find((p) => p.id == currentPostId) : null;
    }
});
export const getError = createSelector(getPostFeatureState, state => state.error);
//# sourceMappingURL=post.selectors.js.map