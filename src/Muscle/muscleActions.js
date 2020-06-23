export const RETRIEVE_MUSCLE = "RETRIEVE_MUSCLE";


export const fetchMuscle = (muscle) => {
    return {
        type: RETRIEVE_MUSCLE,
        payload: muscle,
    };
};


export const getMuscle = (muscleid) => async (dispatch) => {
    const response = await fetch(
        `http://localhost:5000/${muscleid}`
    );
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchMuscle(res));
    }
};

// export const addFavorite = (user_id, deck_id) => async (dispatch) => {
//     const response = await fetch(`http://localhost:5000/${user_id}/${deck_id}/favorites`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user_id, deck_id }),
//     });
//     if (response.ok) {
//         const res = await response.json();
//         dispatch(favoriteNewDeck(res));
//     }
// };

// export const deleteFavorite = (user_id, deck_id) => async (dispatch) => {
//     const response = await fetch(`http://localhost:5000/${user_id}/${deck_id}/favoritedelete`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user_id, deck_id }),
//     });
//     if (response.ok) {
//         const res = await response.json();
//         dispatch(deleteFavDeck(res));
//     }
// };


// export const EditCurrentDeck = (user_id, deckid, title, description) => async (
//     dispatch
// ) => {
//     const response = await fetch(`http://localhost:5000/user/${user_id}/deck/${deckid}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description }),
//     });
//     if (response.ok) {
//         const res = await response.json();
//         dispatch(editDeck(res.data));
//     }
// };
