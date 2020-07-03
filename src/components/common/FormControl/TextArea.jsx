import React from "react";

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={(hasError?"error":"formControl")}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={(hasError?"error":"formControl")}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
