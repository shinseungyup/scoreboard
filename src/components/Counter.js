import React from "react";
import {useDispatch} from "react-redux";
import {changeScore} from "../redux/actions";

const Counter = (props) => {
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(changeScore(props.id, -1));
    };

    const handleIncrement = () => {
        dispatch(changeScore(props.id, 1));
    };

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={handleDecrement}> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={handleIncrement}> + </button>
        </div>
    )
}

export default Counter;