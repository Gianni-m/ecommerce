import './dashboard.scss'
const Dashboard = () => {
    return (
        <div className='product-dashboard'>
            <div className='sidebar'>
                <div className="links">
                <div className='link'>
                    Mes produits
                </div>
                <div className='link'>
                    Stats des ventes
                </div>
                    <div className='link'>
                        Gestion des stocks
                    </div>
                </div>

            </div>
            <div className='stats'>
                <span>nombre de ventes...</span>
            </div>
        </div>
    )
}

export default Dashboard;