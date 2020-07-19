import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControl/TextArea";
import { required } from "../../utilies/Validation";
import { connect } from "react-redux";
import { login } from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({handleSubmit,error}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField('Email','email',Input,[required],'email')}
        {createField('Password','password',Input,[required],'password')}
        {createField(null,'rememberMe',Input,[],'checkbox','remember me')}
     {error && <div className="commonError">
       {error}
       </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/content" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
