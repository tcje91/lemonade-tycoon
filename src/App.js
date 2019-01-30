import React, { Component } from "react";
import "./App.css";
import ClickBtn from "./components/ClickBtn";
import StatList from "./components/StatList";
import LemonSqueezerModule from "./components/LemonSqueezerModule";
import MarkettingModule from "./components/MarkettingModule";
import LemonsModule from "./components/LemonsModule";

class App extends Component {
  state = {
    gameStarted: false,
    lemonadeCount: 0,
    lemonadeStock: 0,
    funds: 500,
    price: 100,
    lemons: 0,
    lemonsPrice: 100,
    squeezerCount: 0,
    squeezerCost: 2000,
    marketting: 1,
    markettingCost: 2000,
  };

  render() {
    const { lemonadeCount, lemonadeStock, funds, price, lemons, lemonsPrice, squeezerCost
    , squeezerCount, markettingCost, marketting } = this.state;
    return (
      <div className="App">
        <h1 onClick={this.setAnimate}>ANIMATE PLS</h1>
        <h1>lemonade tycoon simulator extreme 2019 GOTY edition</h1>
        <h2>get lemons. make lemonade. ??? profit.</h2>
        <ClickBtn clickFunc={this.makeLemonade} label="Make a lemonade" isDisabled={!lemons > 0} />
        <br />
        <ClickBtn className ="buttonLeft" clickFunc={() => this.incPrice(-10)} label="Decrease Price" />
        <ClickBtn className ="buttonRight" clickFunc={() => this.incPrice(10)} label="Increase Price" />
        <br />
        <StatList
          lemonadeCount={lemonadeCount}
          lemonadeStock={lemonadeStock}
          funds={funds}
          price={price}
        />
        <LemonsModule funds={funds} lemons={lemons} lemonsPrice={lemonsPrice} buyLemons={this.buyLemons} />
        {lemonadeCount > 19 && <LemonSqueezerModule addSqueezer={this.addSqueezer} squeezerCost={squeezerCost} squeezerCount={squeezerCount} funds={funds} />}
        {lemonadeCount > 49 && <MarkettingModule marketting={marketting} markettingCost={markettingCost} incMarketting={this.incMarketting} funds={funds}/>}
      </div>
    );
  }

  incMarketting = () => {
    const { funds, marketting, markettingCost } = this.state;
    if (funds >= markettingCost) {
      this.setState({funds: funds - markettingCost, markettingCost: markettingCost + 2000, marketting: marketting + 1})
    }
  }

  makeLemonade = () => {
    const { gameStarted, lemonadeCount, lemonadeStock, lemons } = this.state;
    if(!gameStarted) {
      this.setState({ gameStarted: true })
      this.handleNewPurchase();
    }
    if(lemons > 0) this.setState({ lemonadeCount: lemonadeCount + 1, lemonadeStock: lemonadeStock + 1, lemons: lemons - 1 })
  }


  handleNewPurchase = () => {
    const { price, marketting } = this.state;
    const interval = price * 10 / marketting;
    setTimeout(() => {
      this.buyLemonade();
      this.handleNewPurchase();
    }, Math.random()*interval)
  }

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

  addSqueezer = () => {
    const { squeezerCost, squeezerCount, funds } = this.state;
    if(funds >= squeezerCost) {
      this.setState({ squeezerCost: squeezerCost + 2000, squeezerCount: squeezerCount + 1, funds: funds - squeezerCost })
      setInterval(this.makeLemonade, 1000);
    }
  }

  setAnimate = (event) => {
    console.log(event.target)
    event.target.className = "animated";
  }
}

export default App;
