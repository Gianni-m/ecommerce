import './dashboard.scss'
import {Link} from "react-router-dom";

const DashboardSidebar = (props) => {
    return (
            <div className='sidebar'>
                <div className="links">
                <div className='link'>
                    Mes produits
                </div>
                <div className='link'>
                    Stats des ventes
                </div>
                    <Link className='link'>
                        Gestion des stocks
                    </Link>
                </div>
            </div>

    )
}

export default DashboardSidebar;