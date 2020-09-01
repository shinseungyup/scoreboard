import {ADD_PLAYER, REMOVE_PLAYER, CHANGE_SCORE} from '../action_types';

const initPlayerState = {
    players: [
        {name: 'seungyup', score: 0, id: 1}
    ]
};

export const playerReducer = (state = initPlayerState, action) => {
    let players;

    switch (action.type) {
        case ADD_PLAYER:
            players = [...state.players];
            players.push({
                name: action.name,
                score: 0,
                id: players.length === 0 ? 1 : players[players.length - 1].id + 1
            })
            return {
                ...state,
                players
            };
        case REMOVE_PLAYER:
            players = state.players.filter(player => player.id !== action.id)
            return {
                ...state,
                players
            };
        case CHANGE_SCORE:
            players = [...state.players];
            players.forEach(player => {
                if(player.id === action.id){
                    player.score += action.delta;
                }
            })
            return {
                ...state,
                players
            }
        default:
            return state;
    }
};

