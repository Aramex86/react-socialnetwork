import React from "react";
// import { reduxForm } from "redux-form";
// import { Input, createField } from "../common/FormControl/TextArea";
// import { required } from "../../utilies/Validation";
import { connect } from "react-redux";
import { login } from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import loginBg from "../../assets/images/loginPagePicture.jpg";
import ShowPas from "./ShowPass";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {useFormik} from 'formik';



const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "The field can not be empty";
  } 


  if (!values.email) {
    errors.email = 'The field can not be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};


const LoginForm = ({captchaUrl,login}) => {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      rememberMe:'',
      captcha:''
    },
    validate,
    onSubmit:(values)=>{
     console.log(JSON.stringify(values, null, 2));
      login(values.email,values.password);
      
    }
    
   
  });

  return (
    <>
      <div className="login-bg">
        <img src={loginBg} alt="login-pic"/>
      </div>
      <form onSubmit={formik.handleSubmit} className="login__wrapper-form">
        {/* {createField("Email", "email", Input, [required], "email")}
        {createField("Password", "password", Input, [required], "password")}
        {createField(null, "rememberMe", Input, [], "checkbox", "remember me")} */}


<TextField
          id="email"
          label="email"
          type="email"
          autoComplete="current-password"
          variant="outlined"
          name='email'
          {...formik.getFieldProps('email')}
          className="login__wrapper-forminput"
        />
        {formik.errors.email ? <div style={{color:'red',textAlign:'center',width:'100%',marginBottom:'10px'}}>{formik.errors.email}</div> : null}

       
<TextField
          id="password"
          label="password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name='password'
          {...formik.getFieldProps('password')}
          className="login__wrapper-forminput"
        />
         {formik.errors.password ? <div style={{color:'red',textAlign:'center',width:'100%'}}>{formik.errors.password}</div> : null}
        <Checkbox className="login__wrapper-checkbox"
        id='rememberMe' type='checkbox' name='rememberMe'{...formik.getFieldProps('rememberMe')}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> 
{/*         <input id='email' type='email' name='email'{...formik.getFieldProps('email')}/>
       <input id='password' type='password' name='password'{...formik.getFieldProps('password')}/>
      <input id='rememberMe' type='checkbox' name='rememberMe'{...formik.getFieldProps('rememberMe')}/>*/}

        {captchaUrl && <img src={captchaUrl} alt="captcha" />}
        {captchaUrl && <input  placeholder='Symbols from image' name="captcha" {...formik.getFieldProps('rememberMe')}/>} {/* createField("Symbols from image", "captcha", Input, [required]) */}
        {/* {error && <div className="commonError">{error}</div>} */}

        <div>
          {/* <button className="login__btn">Login</button> */}
         
          <Button variant="contained" color="primary" type="submit" className="login__btn">Login</Button>
        </div>
      </form>
    </>
  );
};

//const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  // const onSubmit = (formData) => {
  //   console.log(formData);
  //   props.login(
  //     formData.email,
  //     formData.password,
  //     formData.rememberMe,
  //     formData.captcha
  //   );
  // };

  if (props.isAuth) {
    return <Redirect to="/content" />;
  }

  return (
    <div className="login__wrapper">
      <ShowPas />
      {/* <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} /> */}
      <LoginForm login={props.login}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
