import React from "react";
import Posts from "./Posts";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

let AddProfilePost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newText"
        placeholder="your post here..."
      />
      <button>Add post</button>
    </form>
  );
};

let AddPostFormRedux = reduxForm({ form: "profileForm" })(AddProfilePost);

const MyPosts = (props) => {

  const onAddPost = (values) => {
     props.addPost(values.newText);
  };

  
  return (
    <div>
      <h2>My Posts</h2>
      <AddPostFormRedux onSubmit={onAddPost} />
      <Posts posts={props.posts} />
    </div>
  );
};

export default MyPosts;
