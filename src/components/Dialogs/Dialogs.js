import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
// import { Field, reduxForm } from "redux-form";
// import { TextArea } from "../common/FormControl/TextArea";
// import { maxLength, required } from "../../utilies/Validation";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";

// const maxLength50 = maxLength(50);

// const DialogsForm = (props) => {
//   console.log(props);
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <Field
//         name="newAnswer"
//         placeholder="your message here..."
//         component={TextArea}
//         validate={[required,maxLength50]}
//       ></Field>
//       <button>SEND</button>
//     </form>
//   );
// };
// let DialogsFormRedux = reduxForm({ form: "dialogsForm" })(DialogsForm);
const validate = (values) => {
  const errors = {};
  if (!values.newAnswer) {
    errors.newAnswer = "The field can not be empty";
  } else if (values.newAnswer.length > 25) {
    errors.newAnswer = "Must be 25 characters or less";
  }
  return errors;
};

const DialogsForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newAnswer: "",
    },
    validate,
    onSubmit: (values) => {
      props.sendMessage(values.newAnswer);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        maxLength="27"
        name="newAnswer"
        id="newAnswer"
        type="textarea"
        {...formik.getFieldProps("newAnswer")}
      ></textarea>
      {formik.errors.newAnswer ? <div style={{color:'red',textAlign:'center',width:'100%'}}>{formik.errors.newAnswer}</div> : null}
      <Button variant="contained" color="primary" type="submit">
        SEND
      </Button>
    </form>
  );
};

const Dialogs = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;

  const dialog = props.dialogs.map((dialog, index) => (
    <DialogItem
      key={index}
      name={dialog.name}
      id={dialog.id}
      img={dialog.img}
    />
  ));
  const message = props.messages.map((message, index) => (
    <Message
      key={index}
      message={message.message}
      id={message.id}
      img={message.img}
      profile={props.profile}
    />
  ));
  // const addMessage = (values) => {
  //   props.sendMessage(values.newAnswer);
  //   //props.store.dispatch(addNewMessageActionCreator());
  // };

  return (
    <div className="dialogs__wrapper">
      <div className="dialogs__wrapper-dialogs">{dialog}</div>
      <div className="dialogs__wrapper-messages">
        {message} <DialogsForm {...props} />
        {/* <DialogsFormRedux onSubmit={addMessage} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
