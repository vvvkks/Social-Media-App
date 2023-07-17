import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post!', likesCount: 26},
            ],
            newPostText: 'vvvkks.com'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Polina'},
                {id: 2, name: 'Syren'},
                {id: 3, name: 'Alexander'},
                {id: 4, name: 'Tom'},
                {id: 5, name: 'Pavel'},
                {id: 6, name: 'Tom'}
            ],
            messages: [
                {id: 1, message: 'Hey, how was your day?'},
                {id: 2, message: 'It was pretty good. I had a productive day at work. How about you?'},
                {
                    id: 3,
                    message: 'Mine was good too. I finished some pending tasks and even had some time for relaxation.',
                },
                {id: 4, message: 'That is great to hear.'},
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}
window.store = store;