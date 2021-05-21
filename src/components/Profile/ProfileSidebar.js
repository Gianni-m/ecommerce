import './Profile.scss'
import {Link} from "react-router-dom";

const ProfileSidebar = () => {
    return (
        <div className='sidebar'>

            <div className="links">
                <Link className='link' to='/profile'>
                    <div>Profil</div>
                </Link>
                <Link className='link' to='/profile/infos'>
                    <div>Infos</div>
                </Link>
                <Link className='link' to='/profile/commands'>
                    <div>Commandes</div>
                </Link>

            </div>
        </div>

    )
}

export default ProfileSidebar;
