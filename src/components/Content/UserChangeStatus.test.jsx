import React from "react";
import { create } from "react-test-renderer";
import UserChangeStatusWithHooks from "./UserChangeStatusWithHooks";
import UserChangeStatus from "./UserChangeStatus";

describe("UserChangeStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<UserChangeStatus status="hey" />);
    const instance  = component.getInstance();
    expect(instance.state.status).toBe("hey");
  });
});
describe("UserChangeStatus component", () => {
  test("span", () => {
    const component = create(<UserChangeStatusWithHooks status="hey" />);
    const root = component.root;
    const p =  root.findByType('p');
    expect(p).not.toBeNull();
  });
});
describe("UserChangeStatus component", () => {
  test("input shouldn't be displayed", () => {
    const component = create(<UserChangeStatusWithHooks status="hey" />);
    const root = component.root;
 
    expect(()=>{
      let input = root.findByType("input");
    }).toThrow();
  });
});
describe("UserChangeStatus component", () => {
  test("input shouldn't be displayed in editMode instead of p", () => {
    const component = create(<UserChangeStatusWithHooks status="hey" />);
    const root = component.root;
    let p = root.findByType("p");
    p.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe('hey');
    
  });
});





// import React, { useState,useEffect } from "react";
// import {create} from 'react-test-renderer';
// import UserChangeStatus from "./UserChangeStatus";

// describe('UserChangeStatus component', () => {
//   test('status from props should be in state',()=>{
//     const component =create(<UserChangeStatus status="React Cool !!!"/>);
//     const instance = component.getInstance();
//     expect(instance.state.status).toBe("React Cool !!!");
//   });
  
// });
