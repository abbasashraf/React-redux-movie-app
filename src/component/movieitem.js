import React, { Component } from "react";
import { addToFav, remove } from "../action"
import { connect } from "react-redux"
const url = "https://image.tmdb.org/t/p/w342"
const moviurl = "https://www.themoviedb.org/movie/"

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: false
        }
    }

    addToFav() {
        this.setState({ fav: !this.state.fav })
        this.props.addToFav(this.props.movie)

    }
    removefav() {
        this.setState({ fav: !this.state.fav })
        this.props.remove(this.props.movie)

    }
    displayFav() {
        if (!this.state.fav) {
            return <span className="glyphicon glyphicon-heart-empty"
                onClick={() => this.addToFav()}></span>
        } else {
            return <span className="glyphicon glyphicon-heart"
                onClick={() => this.removefav()}></span>
        }
    }

    render() {
       // console.log(this.props)
        return (
            <div>
                <div className="col-sm-12 col-sm-3">
                    <div className="thumbnail">
                    <a href={moviurl + this.props.movie.id}>
                    <img src={url + this.props.movie.poster_path} alt={this.props.movie.title} />
                    </a>
                        <div className="caption">
                            <h3>{this.props.movie.title}</h3>
                            <p>{this.props.movie.overview}</p>
                            <p>Release Date - {this.props.movie.release_date}</p>
                            <p>Rating - <span className="badge badge-default">  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>  {this.props.movie.vote_average}</span></p>
                            <p>{this.props.showButton ? this.displayFav(): null}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, { addToFav, remove })(MovieItem);