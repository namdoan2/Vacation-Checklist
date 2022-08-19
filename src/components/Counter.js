import React, {useState} from "react";
import './Counter.css';
import {RemoveRounded, AddRounded} from '@material-ui/icons';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
      }
      
      const decrement = () => {
        setCount(count - 1)
      }

    return(
        <div className="counter">
        <RemoveRounded onClick={decrement}/>
            <h4>{count}</h4>
        <AddRounded onClick={increment}/>
        </div>
    )
}

export default Counter;