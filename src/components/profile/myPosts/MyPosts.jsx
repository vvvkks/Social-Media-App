import {Post} from "./post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import {AddPostsForm} from "./AddPostsForm";

const MyPosts = React.memo(props => {
	let postsElements = this.props.posts.map(p => (
		<Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
	));

	let newPostElement = React.createRef();
	let addNewPost = (values) => {
		this.props.addPost(values.newPostText);
	};

	return (
		<div className={s.postsBlock}>
			<h3>Posts</h3>
			<AddPostsForm handleFormSubmit={addNewPost}/>
			<div className={s.posts}>{postsElements}</div>
		</div>
	)
})
export default MyPosts;

