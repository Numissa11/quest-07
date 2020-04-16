import React from "react";
import "./QuoteCard.css";

class QuoteCard extends React.Component {
  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.quote.image} alt={this.props.character} />

        <blockquote>{this.props.quote.quote}</blockquote>
        <p>
          <cite>{this.props.quote.character}</cite>} >
        </p>
      </figure>
    );
  }
}

export default QuoteCard;
