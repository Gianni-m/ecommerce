import {Bar} from "react-chartjs-2";

const parseDate = (date) => {
    return (
        ("00" + date.getDate()).slice(-2) + "/" + ("00"+date.getMonth()).slice(-2) + "/" + date.getFullYear()
    )
}

const getDates = (numberOfDate) => {
    const dates = [];
    const initialTimeStamp = Date.now()
    for(let i =0 ; i < numberOfDate ; i++) {
        const date = new Date(initialTimeStamp + (i * 1000 * 3600* 24))
        dates.push(parseDate(date))
    }
    return dates;
}

const data = {
    labels: getDates(6),
    datasets: [
        {
            label: 'nombre de ventes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(99,151,255)',
        },

    ],
};

const dataCommands = {
    labels: getDates(6),
    datasets: [
        {
            label: 'nombre de commandes',
            data: [23, 66, 2, 1, 7, 5],
            backgroundColor: 'rgb(104,255,99)',
        },

    ],
};

const StatGraphs = () => {
    return (
        <div className='stats-graph'>
            <div className='graph'>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                    type='bar'/>
            </div>
            <div className='graph'>
                <Bar
                    data={dataCommands}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                 type='bar'/>
            </div>
        </div>
    )
}

export default StatGraphs;

