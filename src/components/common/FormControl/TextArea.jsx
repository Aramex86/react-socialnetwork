import React from "react";
import { Field } from "redux-form";

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? "error" : "formControl"}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? "error" : "formControl"}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  component,
  validate,
  type,
  text = "",
  props={}
) => (

  <div className="form-field">
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validate}
      type={type}
      {...props}
    />
    {text}
  </div>
);
