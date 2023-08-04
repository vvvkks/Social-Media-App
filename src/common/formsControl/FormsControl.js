import React from "react";
import { useField } from "formik";
import styles from './FormControls.module.css';

export const Textarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={`${styles.formControl} ${meta.error && meta.touched ? styles.error : ''}`}>
            <div>
                <textarea {...field} {...props} />
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    );
};