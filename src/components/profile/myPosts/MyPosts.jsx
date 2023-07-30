import {Post} from "./post/Post";
import s from "./MyPosts.module.css";
import React from "react";

export const MyPosts = (props) => {
	let postsElements = props.posts
		.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>)
	let onAddPost = () => {
		props.addPost();
	}
	let newPostElement = React.createRef();
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (<div className={s.postsBlock}>
		<h3>Posts</h3>
		<div>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
			</div>
			<div>
				<button onClick={onAddPost}>Add post
				</button>
			</div>
		</div>
		<div className={s.posts}>
			{postsElements}
		</div>
	</div>)
}

export default MyPosts;

