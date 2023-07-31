import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginPage = () => {
    const captchaUrl = useSelector((state) => state.auth.captchaUrl);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: '',
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Incorrect email').required('Obligatory gap'),
        password: Yup.string().required('Obligatory gap'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        dispatch(login(values.email, values.password, values.rememberMe, values.captcha));
        setSubmitting(false);
    };

    if (isAuth) {
        return (
            <Navigate to="/profile"></Navigate>
        );
    }
    return (
        <div>
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label>Email:</label>
                            <Field type="text" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div>
                            <label>
                                <Field type="checkbox" name="rememberMe" />
                                Remember Me
                            </label>
                        </div>
                        {captchaUrl && (
                            <div>
                                <img src={captchaUrl} alt="Captcha" />
                                <label>Symbols from image:</label>
                                <Field type="text" name="captcha" />
                                <ErrorMessage name="captcha" component="div" />
                            </div>
                        )}
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;



