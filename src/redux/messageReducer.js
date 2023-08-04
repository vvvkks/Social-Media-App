import {v4} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE'
let initialState = {
    messages: [
        {id: v4(), message: 'Hey, how was your day?'},
        {id: v4(), message: 'It was pretty good. I had a productive day at work. How about you?'},
        {
            id: v4(),
            message: 'Mine was good too. I finished some pending tasks and even had some time for relaxation.',
        },
        {id: v4(), message: 'That is great to hear.'},
    ],
    dialogs: [
        {id: 1, name: 'Polina'},
        {id: 2, name: 'Syren'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Tom'}
    ]
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: v4(), message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE, newMessageBody
})
export default messageReducer;