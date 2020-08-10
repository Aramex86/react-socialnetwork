import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControl/TextArea";
import { required } from "../../utilies/Validation";
import { connect } from "react-redux";
import { login } from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField('Email','email',Input,[required],'email')}
        {createField('Password','password',Input,[required],'password')}
        {createField(null,'rememberMe',Input,[],'checkbox','remember me')}

        {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
        {captchaUrl && createField('Symbols from image','captcha',Input,[required])}
     {error && <div className="commonError">
       {error}
       </div>}
      <div>
        <button className="login__btn">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe,formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to="/content" />;
  }

  return (
    <div className="login__wrapper">
      {/* <h1>Login</h1> */}
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl:state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
