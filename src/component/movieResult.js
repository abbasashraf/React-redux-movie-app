import React, { Component } from 'react';
import Search from './search'
import { connect } from "react-redux";
import MovieItem from "./movieitem"
import Favmovielist from "./favlist"
import { Link } from 'react-router-dom'

function mstp(state) {
    //console.log(state.movies)
    return {
        items: state.movies
    }
}
class MovieResults extends Component {
    render() {
        // console.log(this.props.items, "sfdsffsdf moviesss")
        return (
            <div>
                <Link to="/fav"> Favorite</Link>
                <hr />
                <Search  />

                <div>
                    
                    {this.props.items.map((item, i) => {
                        return <MovieItem movie={item} key={i} showButton={true} />
                    })}
                </div>
            </div>
        );
    }
}



export default connect(mstp, null)(MovieResults);
