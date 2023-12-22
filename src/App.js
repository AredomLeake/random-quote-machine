import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRandomQuote } from "./actions";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

const App = ({ quote, author, fetchRandomQuote }) => {
  const [randomColor, setRandomColor] = useState("#ffffff"); // Initialize with white color

  useEffect(() => {
    fetchRandomQuote();
    setRandomColor(generateRandomColor());
  }, [fetchRandomQuote]);

  const handleNewQuote = () => {
    fetchRandomQuote();
    setRandomColor(generateRandomColor());
  };

  const handleTweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(twitterURL, "_blank");
  };

  const handleTumbrlQuote = () => {
    const tumblrURL = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
      author
    )}&content=${encodeURIComponent(quote)}`;
    window.open(tumblrURL, "_blank");
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const quoteBoxStyle = {
    backgroundColor: "#ffffff", // Set quote-box background color to white
  };

  const buttonStyle = {
    backgroundColor: randomColor, // Set button background color to the same random-generated color
  };
  const bodyStyle = {
    backgroundColor: randomColor, // Set body background color to the same random-generated color
  };

  return (
    <>
      <div style={bodyStyle} className="bodyy">
        <div
          id="quote-box"
          className="container d-flex flex-column align-items-center justify-content-center w-400 custom-max-width"
          style={quoteBoxStyle}
        >
          <div
            id="quote-text"
            className="mb-3 custom-max-width"
            style={{ color: randomColor }}
          >
            <span className="quote-symbol">"</span>
            {quote}
          </div>
          <div className="mb-4 d-flex justify-content-end w-100 ">
            <span
              id="quote-author"
              className="font"
              style={{ color: randomColor }}
            >
              - {author}
            </span>
          </div>
          <div
            id="buttons"
            className="d-flex flex-row justify-content-between align-items-center"
          >
            <div className="d-flex align-items-start gap-2">
              <a
                id="tweet-quote"
                className="btn btn-secondary"
                onClick={handleTweetQuote}
                href=""
                style={buttonStyle}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} /> {/* Twitter icon */}
              </a>
              <a
                className="btn btn-secondary"
                onClick={handleTumbrlQuote}
                href=""
                style={buttonStyle}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTumblr} /> {/* Tumblr icon */}
              </a>
            </div>
            <button
              id="new-quote"
              className="btn btn-primary"
              onClick={handleNewQuote}
              style={buttonStyle}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className="footer">
          <a href="" className="link">
            By Aradom
          </a>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.author,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomQuote: () => dispatch(fetchRandomQuote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
