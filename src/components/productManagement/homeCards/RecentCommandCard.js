import {useEffect, useState} from "react";
import {getCommands} from "../../../actions/commandActions";
import {useDispatch} from "react-redux";

const commands = [
    {id: 1233, status: 'PENDING', createAt: new Date() },
    {id: 3495, status: 'DELIVERED', createAt: new Date(1625000000453)},
    {id: 5459530, status: 'DELIVERING', createAt: new Date(3232343434)},


]


const RecentCommandCard = () => {
    const dispatch = useDispatch();
    const [commands, setCommmands] = useState([])

    useEffect(() => {
        dispatch(getCommands())
            .then(commands => setCommmands(commands.slice(0,5)))
    })
    return (
        <div className='card recent-commands-display'>
            {commands.map((command) => {
                console.log(command)
                return (
                <div className="recent-command">
                    <div>
                        <div>
                            <span>
                            {command.id}
                        </span>
                        </div>
                        <div>
                        <span>
                            {getDateAsString(new Date(command.createdAt))}
                        </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            {command.status}
                        </span>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default RecentCommandCard;

const getDateAsString = (date) => {
    return ("00" + date.getDate()).slice(-2) + "/"
    + ("00" + (date.getMonth()+1)).slice(-2) + "/"
    + date.getFullYear();
}