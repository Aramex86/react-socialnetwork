import React, { useState } from "react";

const UserChangeStatusWithHooks=(props)=> {
  
const [editMode, setEditMode] = useState(false);
const [status, setStatus] = useState(false);

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


  
    return (<>
      <div style={{marginLeft:"10px"}}>
        {  !editMode &&
          <div>
            <p onDoubleClick={activateEditMode}>{props.status||'no status'}</p>
          </div>
        }
        { editMode &&
          <div>
            <input type="text" onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus={true}/>
          </div>
        }
      </div>
    </>);
  }


export default UserChangeStatusWithHooks;
