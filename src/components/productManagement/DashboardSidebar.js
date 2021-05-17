import './dashboard.scss'
import {Link} from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <div className='sidebar'>

            <div className="links">
                <Link className='link' to='/dashboard'>
                    <div>Home</div>
                </Link>
                <Link className='link' to='/dashboard/products'>
                    <div>Mes produits</div>
                </Link>
                <Link className='link' to='/dashboard/stats'>
                    <div>Stats des ventes</div>
                </Link>
                <Link className='link' to="/dashboard/stock">
                    <div>Gestion des produits</div>
                </Link>
                <Link className='link' to="/dashboard/stockManagement">
                    <div>Gestion des stocks</div>
                </Link>
            </div>
        </div>

    )
}

export default DashboardSidebar;
