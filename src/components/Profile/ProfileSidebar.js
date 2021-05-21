import './Profile.scss'
import {Link} from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <div className='sidebar'>

            <div className="links">
                <Link className='link' to='/profil'>
                    <div>Profil</div>
                </Link>
                <Link className='link' to='/profil/infos'>
                    <div>Infos</div>
                </Link>
                <Link className='link' to='/Profile/commandes'>
                    <div>Commandes</div>
                </Link>

            </div>
        </div>

    )
}

export default ProfileSidebar;
