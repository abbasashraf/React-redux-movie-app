export const MOVIES = 'MOVIES'
export const ADD_FAV = "ADD_FAV"
export const REMOVE = "REMOVE"

export function movies(items) {
    console.log("action movies")
    const action = {
        type: MOVIES,
        items
    }
    return action
}

export function addToFav(movie) {
    return {
        type: ADD_FAV,
        movie
    }
}
export function remove(movie) {
    return {
        type: REMOVE,
        movie
    }
}