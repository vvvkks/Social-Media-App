import {profileAPI} from "../api/api";
import {v4} from "uuid";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS, photos
})
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileUserId(userId)
    dispatch(setUserProfile(data));
}
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export default profileReducer;