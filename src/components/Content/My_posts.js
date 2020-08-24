import React from "react";
import Posts from "./Posts";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required,maxLength } from "../../utilies/Validation";
import {TextArea} from "../common/FormControl/TextArea";

const maxLength10 = maxLength(10);

let AddProfilePost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name="newText"
        placeholder="your post here..."
        validate={[required,maxLength10]}
      />
      <button>Add post</button>
    </form>
  );
};

let AddPostFormRedux = reduxForm({ form: "profileForm" })(AddProfilePost);

const MyPosts = ({profile,...props}) => {
  const onAddPost = (values) => {
     props.addPost(values.newText);
  };

  
  return (
    <div>
      <h2>My Posts</h2>
      <AddPostFormRedux onSubmit={onAddPost} />
      <Posts posts={props.posts} profile={profile} />
    </div>
  );
};

export default MyPosts;
