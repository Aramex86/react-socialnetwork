import React from "react";
import { createField, Input, TextArea } from "../common/FormControl/TextArea";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile,error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
        {error && <div className="commonError">
       {error}
       </div>}
      </div>
      <div className="userinfo__description-name">
        {createField("Full name", "fullname", Input,[],'text')}
      </div>
      <b>About me :</b>
      {createField("About me", "aboutMe", TextArea)}
      <div className="userinfo__description-about">
        <div className="userinfo__description-about-joblook">
          <div>Loking for job</div>
          <span>
            {createField(null, "Loking for job", Input, [], "checkbox")}
            {/* {profile.lookingForAJob ? (
              <img src={like} alt="like" className="like" />
            ) : (
              <img src={unlike} alt="unlike" className="unlike" />
            )} */}
          </span>
        </div>
        <div className="userinfo__description-about-jobdesc">
          <b>My professional skills:</b>
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            TextArea
          )}
        </div>
      </div>
      <div className="userinfo__description-contacts">
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map((key) => {
              return <div key={key} className='contacts_align'>
                <b>{key}: {createField(key, "constacts." + key, Input, [], )}</b>
              </div>
            })}
          </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
