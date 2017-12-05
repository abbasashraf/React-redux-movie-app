import { ADD_FAV, REMOVE } from "../action"


function addToFav(state = [], action) {
    switch (action.type) {
        case ADD_FAV:
            console.log(action.movie, "action.movie")
            let favmovielist = [...state, action.movie]
            return favmovielist
        case REMOVE:
            favmovielist = state.filter(item => item.id !== action.movie.id)
            return favmovielist
        default:
            return state
    }
}

export default addToFav;