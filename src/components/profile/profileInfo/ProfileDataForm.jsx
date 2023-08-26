import React from "react";
import s from "./ProfileInfo.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const ProfileDataForm = ({ profile, onSubmit }) => {
    const validationSchema = Yup.object().shape({
        contacts: Yup.object().shape({
            github: Yup.string().url("Incorrect URL").required("Required"),
            vk: Yup.string().url("Incorrect URL").required("Required"),
            facebook: Yup.string().url("Incorrect URL").required("Required"),
            instagram: Yup.string().url("Incorrect URL").required("Required"),
            twitter: Yup.string().url("Incorrect URL").required("Required"),
            website: Yup.string().url("Incorrect URL").required("Required"),
            youtube: Yup.string().url("Incorrect URL").required("Required"),
            mainLink: Yup.string().url("Incorrect URL").required("Required"),
        }),
        lookingForAJobDescription: Yup.string().max(200, "Too long"),
        fullName: Yup.string()
            .matches(/^[A-Za-z0-9\s]*$/, "Only letters, numbers, and spaces are allowed")
            .required("Required"),
    });

    return (
        <Formik
            initialValues={{
                fullName: profile.fullName,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe,
                contacts: profile.contacts,
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, errors, touched }) => (
                <Form className={s["profile-form"]}>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                    <div>
                        <b>Full name</b>:
                        <input
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                        <ErrorMessage name="fullName" component="div" />
                    </div>
                    <div>
                        <b>Looking for a job</b>:
                        <Field type="checkbox" name="lookingForAJob" />
                    </div>
                    {values.lookingForAJob && (
                        <div>
                            <b>My skills</b>:
                            <input
                                name="lookingForAJobDescription"
                                value={values.lookingForAJobDescription}
                                onChange={handleChange}
                                placeholder="My Skills"
                                className={`form-control ${
                                    touched.lookingForAJobDescription && errors.lookingForAJobDescription ? "error" : ""
                                }`}
                            />
                            {touched.lookingForAJobDescription && errors.lookingForAJobDescription && (
                                <span className="error">{errors.lookingForAJobDescription}</span>
                            )}
                        </div>
                    )}
                    <div>
                        <b>About me</b>:
                        <input
                            name="aboutMe"
                            value={values.aboutMe}
                            onChange={handleChange}
                            placeholder="About Me"
                            className={`form-control ${touched.aboutMe && errors.aboutMe ? "error" : ""}`}
                        />
                        {touched.aboutMe && errors.aboutMe && <span className="error">{errors.aboutMe}</span>}
                    </div>
                    <div>
                        <b>Contacts</b>:{" "}
                        {Object.keys(profile.contacts).map((key) => {
                            return (
                                <div className={s.contact} key={key}>
                                    <b>
                                        {key}:{" "}
                                        <input
                                            name={"contacts." + key}
                                            value={values.contacts[key] || ""}
                                            onChange={handleChange}
                                            placeholder={key}
                                            className={`form-control ${touched.contacts && touched.contacts[key] && errors.contacts && errors.contacts[key] ? "error" : ""}`}
                                        />
                                        {touched.contacts && touched.contacts[key] && errors.contacts && errors.contacts[key] && (
                                            <span className="error">{errors.contacts[key]}</span>
                                        )}
                                    </b>
                                </div>
                            );
                        })}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;