import "./Profile.scss"
import React, { Fragment} from 'react';
import ProfileSidebar from "./ProfileSidebar";



const Profile = () => {
    return (

        <Fragment>
            <h2 className="Header">Votre Profil </h2>

            <div className="profile">
                <ProfileSidebar/>

                <div className="profile-right">


                </div>
            </div>
        </Fragment>
    );
}

export default Profile;