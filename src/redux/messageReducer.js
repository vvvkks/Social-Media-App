const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let initialState = {
    messages: [
        {id: 1, message: 'Hey, how was your day?'},
        {id: 2, message: 'It was pretty good. I had a productive day at work. How about you?'},
        {
            id: 3,
            message: 'Mine was good too. I finished some pending tasks and even had some time for relaxation.',
        },
        {id: 4, message: 'That is great to hear.'},
    ],
    dialogs: [
        {id: 1, name: 'Polina'},
        {id: 2, name: 'Syren'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Tom'}
    ],
    newMessageBody: ""
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default messageReducer;