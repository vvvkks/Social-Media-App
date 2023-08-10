import {profileAPI} from "../api/api";
import {v4} from "uuid";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
let initialState = {
    posts: [
            {id: v4(), message: 'Hi, how are you?', likesCount: 12},
            {id: v4(), message: 'It is my first post!', likesCount: 26},
        ],
    profile: null,
    status: ""
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v4(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
})
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfileUserId(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}
export default profileReducer;