import profileReducer, { addNewPostActionCreator,deletePost } from "./profile-reducer";
import React from 'react';

let state = {
  posts: [
    {
      id: 1,
      message: "Hello how are you",
      likesCount: 10,
    },
    {
      id: 2,
      message: "I am fine",
      likesCount: 25,
    },
    {
      id: 3,
      message: "Happy birthday",
      likesCount: 30,
    },
    {
      id: 4,
      message: "Hello how are you",
      likesCount: 20,
    },
    {
      id: 5,
      message: "Hello how are you",
      likesCount: 20,
    },
    {
      id: 6,
      message: "Hello how are you",
      likesCount: 20,
    },
  ],
};

it("added new post", () => {
  //1.Write test data
  let action = addNewPostActionCreator();
     
  //2.Some action
  let newState = profileReducer(state, action);

  //3.Expectation

  expect(newState.posts.length).toBe(7);
});
 ////// message tets////////
it("new message text", () => {
  //1.Write test data
  let action = addNewPostActionCreator("some text");

  
  //2.Some action
  let newState = profileReducer(state, action);

  //3.Expectation

  expect(newState.posts[6].message).toBe("some text");
});

/////////Delete post test////////
it("Deleting post", () => {
  //1.Write test data
  let action = deletePost(1);

  
  //2.Some action
  let newState = profileReducer(state, action);

  //3.Expectation

  expect(newState.posts.length).toBe(5);
});
it("The post shoud be not deleted if id is wrong", () => {
  //1.Write test data
  let action = deletePost(1000);

  
  //2.Some action
  let newState = profileReducer(state, action);

  //3.Expectation

  expect(newState.posts.length).toBe(6);
});
