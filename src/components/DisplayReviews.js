import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DisplayReviews() {
    const reviews = useSelector(state => state.Reviews)

    useEffect(() => {
    }, [reviews]);

    return (
        <div>
            {Object.values(reviews).map(review =>
                <p>{review.user}: {review.review}</p>
            )
            }
        </div>
    );
}