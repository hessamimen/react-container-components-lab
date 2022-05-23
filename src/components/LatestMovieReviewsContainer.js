import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LuY5pjgDZP2QsQ5WWPoFDPAN5yVliPqS';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

    // Code LatestMovieReviewsContainer Here
    class LatestMovieReviewsContainer extends Component {

        constructor(){
            super();
            this.state = {
                reviews: []
            }
        }
    
        fetchReview = () =>{
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
            console.log(this.state.reviews)
        }
            )
        }

        componentDidMount(){
            this.fetchReview() 
        }
    
    render() { 
        return (            
            <div className='latest-movie-reviews'>
            <h2>The Latest Reviews:</h2>
                <MovieReviews reviews = {this.state.reviews} />
            </div>
        );
    }
}
 
export default LatestMovieReviewsContainer;
