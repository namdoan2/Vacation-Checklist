import React, {useState, useEffect} from "react";
import './Header.css';
import {WbSunnyOutlined} from '@material-ui/icons';
import Weather from "./Weather";

const Header = () => {

    const [time, setTime] = useState(new Date());
    const [active, setActive] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    const showMenu = () => {
        setActive(!active);
    }

    return(
        <div className="header">
        <h1 id="title">Vacation Checklist</h1>
        <h5>Date: {time.toLocaleDateString()}</h5>
        <h5 id="time">Time: {time.toLocaleTimeString()}</h5>
        <div className="sun">
        <WbSunnyOutlined className='sun-icon' onClick={showMenu}/>
        </div>
        <div className={active ? 'slider active' : 'slider'}>
            <Weather/>
        </div>
        </div>
    )
};

export default Header;