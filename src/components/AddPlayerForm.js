import React, {useState} from "react";
import {addPlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

const AddPlayerForm = (props) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    let handleValueChange = (e) => {
        setValue(e.target.value);
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById("form");

        if(!form.checkValidity()){
            alert('Enter a player\'s name');
            return false;
        }
        dispatch(addPlayer(value));
    }

    return (
        <form id="form" className="form" onSubmit={handleSubmit} noValidate>
            <input id="player" className="input" type="text" placeholder="Enter a player's name"
            value={value} onChange={handleValueChange} required />
            <input className="input" value="add Player" type="submit" />
        </form>
    )
}

export default AddPlayerForm;