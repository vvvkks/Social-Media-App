import React, {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";

const ProfileDataForm = ({ profile, onSubmit }) => {
    const [setFullName] = useState(profile.fullName);
    const [setLookingForAJob] = useState(profile.lookingForAJob);
    const [setLookingForAJobDescription] = useState(profile.lookingForAJobDescription);
    const [setAboutMe] = useState(profile.aboutMe);

    useEffect(() => {
        setFullName(profile.fullName);
        setLookingForAJob(profile.lookingForAJob);
        setLookingForAJobDescription(profile.lookingForAJobDescription);
        setAboutMe(profile.aboutMe);
    }, [profile]);


    return (
        <Formik
            initialValues={{
                fullName: profile.fullName,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe,
            }}
            onSubmit={onSubmit}
        >
            {({ values, handleChange }) => (
                <Form>
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
                            />
                        </div>
                    )}
                    <div>
                        <b>About me</b>:
                        <input
                            name="aboutMe"
                            value={values.aboutMe}
                            onChange={handleChange}
                            placeholder="About Me"
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;






