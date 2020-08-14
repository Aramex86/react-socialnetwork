import React, { useState,useEffect } from "react";

const UserChangeStatusWithHooks=(props)=> {
  //debugger;
const [editMode, setEditMode] = useState();
const [status, setStatus] = useState(props.status);


useEffect(() => {
  setStatus(props.status)
}, [props.status]);

const activateEditMode=()=>{
  setEditMode(true);
}
const deactivateEditMode=()=>{
  setEditMode(false);
  props.updateStatus(status);
}
const onStatusChange =(e)=>{
  setStatus(e.currentTarget.value);
}


  
    return (
    <>
        {  !editMode &&
          
            <p onDoubleClick={activateEditMode}>{props.status||'no status'}</p>
         
        }
        { editMode &&
        
            <input type="text" onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus={true}/>
         
        }
    </>);
  }


export default UserChangeStatusWithHooks;
