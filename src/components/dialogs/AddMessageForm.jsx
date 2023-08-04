import {Field, Form, Formik} from "formik";
import React from "react";
import {Textarea} from "../../common/formsControl/FormsControl";

const AddMessageForm = ({handleFormSubmit}) => {
    const handleSubmit = (values, {resetForm}) => {
        handleFormSubmit(values);
        resetForm();
    };
    const validateForm = (values) => {
        const errors = {};
        if (values.newMessageBody.length > 100) {
            errors.newMessageBody = "Max length is 100 symbols";
        }
        return errors;
    };
    return (
        <Formik initialValues={{newMessageBody: ''}} onSubmit={handleSubmit} validate={validateForm}>
            <Form>
                <div>
                    <Field
                        as={Textarea}
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
export {AddMessageForm};