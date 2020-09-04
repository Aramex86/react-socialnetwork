import React from "react";
import Posts from "./Posts";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required, maxLength } from "../../utilies/Validation";
import { TextArea } from "../common/FormControl/TextArea";
import Button from "@material-ui/core/Button";
import { useFormik, Formik } from "formik";

// const maxLength10 = maxLength(10);


const validate = (values) => {
  const errors = {};
  if (!values.newPost) {
    errors.newPost = "The field can not be empty";
  } else if (values.newPost.length > 29) {
    errors.newPost = "Must be 30 characters or less";
  }
  return errors;
};

const AddProfilePost = (props) => {
  const formik = useFormik({
    initialValues: {
      newPost: "",
    },
    validate,
    onSubmit: (values) => {
      props.addPost(values.newPost);
    },
  });

  return (
    // <form onSubmit={props.handleSubmit}>
    //   <Field
    //     component={TextArea}
    //     name="newText"
    //     placeholder="your post here..."
    //     validate={[required,maxLength10]}
    //   />
    //   <Button variant="contained" color="primary" type="submit">
    //    Add Post
    //   </Button>
    // </form>
    <form onSubmit={formik.handleSubmit}>
      <textarea
        maxLength="30"
        name="newPost"
        id="newPost"
        type="textarea"
        {...formik.getFieldProps("newPost")}
      ></textarea>
      {formik.errors.newPost ? (
        <div style={{ color: "red", textAlign: "center", width: "100%" }}>
          {formik.errors.newPost}
        </div>
      ) : null}
      
      <Button variant="contained" color="primary" type="submit">
        Add Post
      </Button>
    </form>
  );
};

// let AddPostFormRedux = reduxForm({ form: "profileForm" })(AddProfilePost);

const MyPosts = ({ profile, ...props }) => {
  // const onAddPost = (values) => {
  //   props.addPost(values.newText);
  // };

  return (
    <div>
      <h2>My Posts</h2>
      {/* <AddPostFormRedux onSubmit={onAddPost} /> */}
      <AddProfilePost {...props}/>
      <Posts
        posts={props.posts}
        profile={profile}
        authUserId={props.authUserId}
      />
    </div>
  );
};

export default MyPosts;
