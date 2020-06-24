import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { new_review } from '../Review/reviewActions';
import { useHistory } from 'react-router-dom'


export default function ReviewForm() {

    const [review, setReview] = useState("")
    const user = useSelector(state => state.User)
    const dispatch = useDispatch();
    const history = useHistory()

    const updateReview = (e) => {
        setReview(e.target.value)
    }

    const handlePost = (e) => {
        e.preventDefault();
        if (user.id) {
            dispatch(new_review(user.id, user.SelectedWorkout, review))
            setReview("")
        }
        else {
            history.push("/login")
        }
    }

    return (
        <div class="review-container">
            <h2> Want to leave a review</h2>
            <form>
                <div class="review-input">
                    <input type="textarea" value={review} name="" required onChange={updateReview} />
                    <label>Please put your review here</label>
                    <span></span>
                </div>
                <input type="submit" value="Post Review" name="" class="post-review" onClick={handlePost} />
            </form>
        </div>
        // <>
        //     <div class="review-input">
        //         <input type="text" placeholder="Enter your review" onChange={updateComment}></input>
        //     </div>
        //     <div class="review">
        //         <ul class="review-text">
        //             <li><p onClick={newComment}>Create Review</p></li>
        //         </ul>
        //     </div>
        //     <div>
        //         <ul ref={comments}>
        //             <li><p>comment 1</p></li>
        //             <li><p>comment 2</p></li>
        //         </ul>

        //     </div>
        // </>

    );
}