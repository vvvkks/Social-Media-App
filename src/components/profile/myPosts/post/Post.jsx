import s from "./Post.module.css";

export const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src="https://icons-for-free.com/iconfiles/png/512/User+Avatar+Human+Profile+Face-131983793572615800.png"
				alt="Content"/>
			{props.message}
			<div>Likes: {props.likesCount}</div>
		</div>
	)
}