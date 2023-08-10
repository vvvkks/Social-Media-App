import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {v4} from "uuid";

let state = {
    posts: [
        {id: v4(), message: 'Hi, how are you?', likesCount: 12},
        {id: v4(), message: 'It is my first post!', likesCount: 26},
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("new Text");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});
test('message of new post should be correct', () => {
    let action = addPostActionCreator("new Text");
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("new Text")
});
test('after deleting length of messages should be decrement', () => {

    let postIdToDelete = state.posts[0].id;
    let initialState = {
        posts: [
            {id: postIdToDelete, message: 'Hi, how are you?', likesCount: 12},
            {id: v4(), message: 'It is my first post!', likesCount: 26},
        ]
    };

    let action = deletePost(postIdToDelete);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(initialState.posts.length - 1);
});
test(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    let action = deletePost(5);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2)
});