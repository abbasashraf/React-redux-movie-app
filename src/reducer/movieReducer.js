

import { MOVIES } from '../action'
export default function movies(state = [], action) {
    switch (action.type) {
        case MOVIES:
            console.log(action.items, "action,item")
            return action.items;
        default:
            return state
    }
}