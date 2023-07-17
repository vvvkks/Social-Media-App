import s from './Message.module.css'

const Message = (props) => {
	const messageClasses = props.isLeft ? `${s.message} ${s.left}` : `${s.message} ${s.right}`;
	return <div className={messageClasses}>{props.message}</div>;
};
export default Message;