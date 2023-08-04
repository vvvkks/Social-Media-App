import {Post} from "./post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import {Field, Form, Formik} from "formik";


const AddPostsForm = ({ handleFormSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		handleFormSubmit(values);
		resetForm();
	};

	return (
		<Formik initialValues={{ newPostText: '' }}  onSubmit={handleSubmit}>
			<Form>
				<Field
					as="textarea"
					name="newPostText"
					placeholder="Enter your post"
				/>
				<div>
					<button type="submit">Add post</button>
				</div>
			</Form>
		</Formik>
	);
}
const MyPosts = (props) => {
	let postsElements = props.posts.map(p => (
		<Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
	));

	let newPostElement = React.createRef();
	let addNewPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={s.postsBlock}>
			<h3>Posts</h3>
			<AddPostsForm handleFormSubmit={addNewPost} />
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;

