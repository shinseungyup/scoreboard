import React from "react";
import Counter from "./Counter";
import {useDispatch} from "react-redux";
import {removePlayer} from "../redux/actions";

const Player = (props) => {
    const dispatch = useDispatch();
    const handleRemovePlayer = () => {
        dispatch(removePlayer(props.id));
    };

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={handleRemovePlayer}> x </button>
                {props.children}
                {props.name}
            </span>
            <Counter id={props.id} score={props.score}></Counter>
        </div>
    )
}

export default Player;