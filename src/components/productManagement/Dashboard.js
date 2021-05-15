import './dashboard.scss'
import StatGraphs from "./StatsGraph";
import StockCard from "./cards/StockCard";
import RecentCommandCard from "./cards/RecentCommandCard";
const Dashboard = () => {
    return (
        <div className='seller-dashboard'>
            <StatGraphs/>
            <div className='quick-data'>
                <StockCard/>
                <RecentCommandCard/>
                <RecentCommandCard/>
            </div>

        </div>
    )
}

export default Dashboard;