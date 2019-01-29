import React, { Component } from "react";
import "./App.css";
import ClickBtn from "./components/ClickBtn";
import StatList from "./components/StatList";

class App extends Component {
  state = {
    gameStarted: false,
    lemonadeCount: 0,
    lemonadeStock: 0,
    funds: 500,
    price: 100,
    lemons: 10,
    lemonsPrice: 100,
  };

  render() {
    const { lemonadeCount, lemonadeStock, funds, price, lemons, lemonsPrice } = this.state;
    return (
      <div className="App">
        <h1>Lemonade Tycoon Simulator 2019</h1>
        <ClickBtn clickFunc={this.makeLemonade} label="Make a lemonade" />
        <br />
        <ClickBtn clickFunc={this.buyLemons} label="Buy lemons" />
        <br />
        <ClickBtn clickFunc={() => this.incPrice(10)} label="Increase Price" />
        <ClickBtn clickFunc={() => this.incPrice(-10)} label="Decrease Price" />
        <br />
        <StatList
          lemondadeCount={lemonadeCount}
          lemonadeStock={lemonadeStock}
          funds={funds}
          price={price}
          lemons={lemons}
          lemonsPrice={lemonsPrice}
        />
      </div>
    );
  }

  makeLemonade = () => {
    const { gameStarted, lemonadeCount, lemonadeStock, lemons } = this.state;
    if(!gameStarted) {
      this.setState({ gameStarted: true })
      setInterval(this.buyLemonade, 1000)
    }
    if(lemons > 0) this.setState({ lemonadeCount: lemonadeCount + 1, lemonadeStock: lemonadeStock + 1, lemons: lemons - 1 })
  }

  // componentDidUpdate = (prevProps, prevState) => {

  // }

  buyLemonade = () => {
    const { lemonadeStock, funds, price } = this.state;
    if (this.state.lemonadeStock > 0) {
      this.setState({ lemonadeStock: lemonadeStock - 1, funds: funds + price})
    }
  }

  buyLemons = () => {
    const { lemons, funds, lemonsPrice } = this.state;
    if (funds >= lemonsPrice) this.setState({ lemons: lemons + 5, funds: funds - lemonsPrice })
  }

  incPrice = (num) => {
    const { price } = this.state;
    this.setState({ price: price + num })
  }
}

export default App;
