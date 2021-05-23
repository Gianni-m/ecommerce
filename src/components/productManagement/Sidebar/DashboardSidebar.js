import './sidebar.scss'
import {Link} from "react-router-dom";

const DashboardSidebar = (props) => {
    const {user} = props;
    return (
        <nav className='seller-dashboard-sidebar'>
            <div className='sidebar-header'>
                <h3>{"Bienvenue " + user.username}</h3>
            </div>
            <div className='action-list'>
                <Link className='link' to='/dashboard'>
                    <div>Home</div>
                </Link>
                <Link className='link' to='/dashboard/cartProduct'>
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
        </nav>

    )
}

export default DashboardSidebar;
