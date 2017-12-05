import movies from "./movieReducer"
import addToFav from "./favducer.js"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    movies,addToFav
})

export default rootReducer;