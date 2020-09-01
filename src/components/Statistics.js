import React from "react";

export const Statistics = (props) => {
    let totalPlayer = props.players.length;
    let totalScore = 0;
    props.players.forEach(player => totalScore += player.score);

    return (
        <table className='stats'>
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalPlayer}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
            </tr>
            </tbody>
        </table>
    )
}