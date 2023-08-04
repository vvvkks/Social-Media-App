import {Field, Form, Formik} from "formik";
import React from "react";

export const AddPostsForm = ({handleFormSubmit}) => {
    const handleSubmit = (values, {resetForm}) => {
        handleFormSubmit(values);
        resetForm();
    };

    return (
        <Formik initialValues={{newPostText: ''}} onSubmit={handleSubmit}>
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