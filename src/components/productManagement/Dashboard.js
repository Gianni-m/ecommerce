import './dashboard.scss'
import StatGraphs from "./StatsGraph";
import StockCard from "./homeCards/StockCard";
import RecentCommandCard from "./homeCards/RecentCommandCard";
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