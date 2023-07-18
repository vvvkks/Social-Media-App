import s from "./Dialogs.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import React from "react";


export const Dialogs = (props) => {
	let state = props.messagesPage;
	let dialogsElements = state.dialogs
		.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	let messagesElements = state.messages
		.map(m => <Message message={m.message} key={m.id} id={m.id} isLeft={m.isLeft}/>)
	let newMessageBody = state.newMessageBody;
	let onSendMessageClick = () => {
		props.sendMessage();
	}
	let onNewMessageChange = (event) => {
		let body = event.target.value;
		props.updateNewMessageBody(body);
	}
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea value={newMessageBody}
								  onChange={onNewMessageChange}
								  placeholder={'Enter your message'}></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Dialogs;