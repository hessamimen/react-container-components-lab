import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LuY5pjgDZP2QsQ5WWPoFDPAN5yVliPqS';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
 const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    //===
    state = {
        searchTerm: '',
        reviews: []
      };
    
      handleChange = event =>
        this.setState({ 
            searchTerm: event.target.value
         });
    
      handleSubmit = event => {
        event.preventDefault();
    
        fetch(BASE_URL+this.state.searchTerm)
          .then(res => res.json())
          .then(res => this.setState({ reviews: res.results }));
      };

    //===

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column', margin: '1rem'}} >
                <label style={{fontSize:'larger', borderTop: '5px solid green', paddingTop:'1rem'}}>Search Movie Reviews:</label>
                <input value={this.state.searchTerm} onChange={this.handleChange} type="text" style={{ marginTop: '.5rem'}} />
                <button type='submit' style={{background: 'green', border: 0, marginTop:'.5rem' , padding: '.5rem .5rem'}} >Submit</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
            
        );
    }
}
 
export default SearchableMovieReviewsContainer;