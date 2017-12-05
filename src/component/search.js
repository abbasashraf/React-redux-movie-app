import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { API_KYE } from '../secrete'
import { movies } from '../action'
import { connect } from 'react-redux'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    search() {
        console.log(this.state.query)
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KYE}&language=en-US&page=1&include_adult=false&query=${this.state.query}`
        console.log(url)
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(jsonObj => {
                this.props.movies(jsonObj.results)
            })
    }

    render() {
        return (
            <div>
                <Form inline className="col-md-6 col-md-offset-4">
                    <FormGroup>
                        <ControlLabel>Search</ControlLabel>
                        {"  "}
                        <FormControl
                            type="text"
                            placeholder="Search the moviee"
                            onChange={(event) => this.setState({ query: event.target.value })} />
                        {"  "}
                        <Button bsStyle="success" onClick={this.search.bind(this)}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(null, { movies })(Search)