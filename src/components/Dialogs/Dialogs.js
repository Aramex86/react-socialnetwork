import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

//const addNewMessage = React.createRef();

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newAnswer"
        placeholder="your message here..."
        component="textarea"
      ></Field>
      <button>SEND</button>
    </form>
  );
};
let DialogsFormRedux = reduxForm({ form: "dialogsForm" })(DialogsForm);
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
    />
  ));

  const addMessage = (values) => {
    props.sendMessage(values.newAnswer);
    //props.store.dispatch(addNewMessageActionCreator());
  };

  return (
    <div className="dialogs__wrapper">
      <div className="dialogs__wrapper-dialogs">{dialog}</div>
      <div className="dialogs__wrapper-messages">
        {message} <DialogsFormRedux onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
