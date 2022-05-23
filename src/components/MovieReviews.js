// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return (
        <ol className='review-list'>
        {props.reviews.map((review, index) => {
            return ( 
                <li className='review-list' key={index}>
                        <div className='review'>
                            <p>Title: {review.display_title} </p>
                            <a href={review.link.url} target="_blank" style={{color: 'green'}}>{review.headline}</a>
                            <p>Authur: {review.byline}</p>
                            <p>Summary: {review.summary_short}</p>
                        </div>
                                
                                                
                </li> 
                )
        })}

        </ol>
    );
}

 
export default MovieReviews;