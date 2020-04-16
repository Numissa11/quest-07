import React from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
    };
  }

  getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => this.setState({ quote: response.data[0] }));
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {

    console.log(this.state);
    return <div className="App">
      <QuoteCard 
      {...this.state}
      />
      <button onClick={this.getQuote}>Click me</button>
    </div>;
  }
}

export default App;
