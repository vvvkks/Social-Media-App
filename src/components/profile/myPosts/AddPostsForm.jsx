import {Field, Form, Formik} from "formik";
import React from "react";
import {Textarea} from "../../../common/formsControl/FormsControl";

export const AddPostsForm = ({handleFormSubmit}) => {
    const handleSubmit = async (values, {resetForm}) => {
        await handleFormSubmit(values);
        resetForm();
    };
    const validateForm = (values) => {
        const errors = {};
        if (!values.newPostText) {
            errors.newPostText = "Field is required";
        } else if (values.newPostText.length > 15) {
            errors.newPostText = "Max length is 15 symbols";
        }
        return errors;
    };

    return (
        <Formik initialValues={{newPostText: ''}} onSubmit={handleSubmit} validate={validateForm}>
            <Form>
                <Field
                    as={Textarea}
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