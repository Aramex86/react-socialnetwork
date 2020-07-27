import React from "react";
import unlike from "../../assets/images/unlike.png";
import like from "../../assets/images/like.png";

import userPhoto from "../../assets/images/user.png";
import { createField, Input, TextArea } from "../common/FormControl/TextArea";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, isOwner, goToEditMode }) => {
  return (
    <form>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>save</button>
        </div>
      )}
      <div className="userinfo__description-name">
        {createField("Full name", "fullname", Input)}
      </div>
      <b>About me :</b> {profile.aboutMe}
      {createField('About me', "aboutMe", TextArea)}

      <div className="userinfo__description-about">
        <div className="userinfo__description-about-joblook">
          <div>Loking for job</div>
          <span>
          {createField('', "Loking for job",Input,[], {type:'checkbox'})}
            {/* {profile.lookingForAJob ? (
              <img src={like} alt="like" className="like" />
            ) : (
              <img src={unlike} alt="unlike" className="unlike" />
            )} */}
          </span>
        </div>
        <div className="userinfo__description-about-jobdesc">
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}
          {createField('My professional skills', "lookingForAJobDescription", TextArea)}
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
