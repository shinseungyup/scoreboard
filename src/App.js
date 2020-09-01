import React from 'react';
import {useSelector} from 'react-redux'
import './App.css';
import {Header} from "./components/Header";
import {CustomPlayer} from "./components/CustomPlayer";
import AddPlayerForm from "./components/AddPlayerForm";

function App() {
    const players = useSelector(state => state.playerReducer.players);

    const getHighScore = () => {
        const highScore = Math.max.apply(Math, players.map(o => o.score));
        return highScore === 0 ? '' : highScore;
    };

    return (
        <div className="scoreboard">
            <Header players={players}></Header>
            {
                players.map(player =>
                    <CustomPlayer name={player.name} score={player.score}
                                  id={player.id} key={player.id}
                                  isHighScore={player.score === getHighScore()}>
                    </CustomPlayer>
                )
            }
            <AddPlayerForm></AddPlayerForm>
        </div>
    );
}

export default App;
