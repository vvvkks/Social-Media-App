import s from "./Dialogs.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import { Formik, Form, Field } from 'formik';


export const Dialogs = (props) => {
	let state = props.messagesPage;
	let dialogsElements = state.dialogs
		.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	let messagesElements = state.messages
		.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
	let newMessageBody = state.newMessageBody;
	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}
	if (!props.isAuth) return <Navigate to={"/login"} />;
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageForm handleFormSubmit={addNewMessage}/>
		</div>
	)
}

const AddMessageForm = ({ handleFormSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		handleFormSubmit(values);
		resetForm();
	};
	return (
		<Formik initialValues={{ newMessageBody: '' }} onSubmit={handleSubmit}>
			<Form>
				<div>
					<Field
						as="textarea"
						name="newMessageBody"
						placeholder="Enter your message"
					/>
				</div>
				<div>
					<button type="submit">Send</button>
				</div>
			</Form>
		</Formik>
	);
}
export default Dialogs;
export { AddMessageForm };