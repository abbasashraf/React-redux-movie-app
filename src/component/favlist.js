import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./movieitem";
import { Link } from 'react-router-dom'


function mstp(state) {
    // console.log(state)
    return {
        Favmovielist: state.addToFav
    }
}

class Favmovielist extends Component {
    render() {
        // console.log(this.props.Favmovielist, "favmovielist")
        return (
            <div>
                <Link to="/">Home</Link>
                <br />
                <h4>My favorite movies</h4>
                {
                    this.props.Favmovielist.map(movie => {
                        return <MovieItem movie={movie} key={movie.id} showButton={false} />
                    })
                }
            </div>)
    }
}

export default connect(mstp, null)(Favmovielist);