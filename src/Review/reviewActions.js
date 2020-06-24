export const POST_REVIEW = "POST_REVIEW";


export const post = (review) => {
    return {
        type: POST_REVIEW,
        payload: review,
    };
};


export const new_review = (user_id, workoutplan_id, review) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/postreview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, workoutplan_id, review }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(post(res));
    }
};