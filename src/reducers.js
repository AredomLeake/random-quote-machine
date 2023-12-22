// reducers.js
const initialState = {
  quote: "This is a random quote",
  author: "Anonymous",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RANDOM_QUOTE":
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default rootReducer;
