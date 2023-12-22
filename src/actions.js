// actions.js
export const fetchRandomQuote = () => {
  return (dispatch) => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_RANDOM_QUOTE",
          payload: {
            quote: data.content,
            author: data.author,
          },
        });
      })
      .catch((error) => {
        console.log("Error fetching random quote:", error);
      });
  };
};
