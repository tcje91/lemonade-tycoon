import React, { Component } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import ClickBtn from "./components/ClickBtn";
import StatList from "./components/StatList";
import LemonSqueezerModule from "./components/LemonSqueezerModule";
import MarkettingModule from "./components/MarkettingModule";
import LemonsModule from "./components/LemonsModule";
import TreeModule from "./components/TreeModule";

class App extends Component {
  state = {
    gameStarted: false,
    lemonadeCount: 0,
    lemonadeStock: 0,
    funds: 500,
    price: 100,
    lemons: 5,
    lemonsPrice: 100,
    squeezerCount: 0,
    squeezerCost: 2000,
    marketting: 1,
    markettingCost: 5000,
    treeCount: 0,
    treeCost: 10000
  };

  render() {
    const {
      lemonadeCount,
      lemonadeStock,
      funds,
      price,
      lemons,
      lemonsPrice,
      squeezerCost,
      squeezerCount,
      markettingCost,
      marketting,
      treeCost,
      treeCount
    } = this.state;
    return (
      <div className="App">
        <div id="header">
          <h1>lemonade tycoon simulator extreme 2019 GOTY edition</h1>
          <h2>get lemons. make lemonade. ??? profit.</h2>
        </div>
        <ClickBtn
          clickFunc={this.makeLemonade}
          label="Make a lemonade"
          isDisabled={!lemons > 0}
        />
        <ClickBtn
          className="buttonLeft"
          clickFunc={() => this.incPrice(-10)}
          label="Decrease Price"
        />
        <ClickBtn
          className="buttonRight"
          clickFunc={() => this.incPrice(10)}
          label="Increase Price"
        />
        <br />
        <div className="modulesContainer">
          <StatList
            lemonadeCount={lemonadeCount}
            lemonadeStock={lemonadeStock}
            funds={funds}
            price={price}
          />
          <LemonsModule
            funds={funds}
            lemons={lemons}
            lemonsPrice={lemonsPrice}
            buyLemons={this.buyLemons}
          />
          <CSSTransition in={lemonadeCount > 19} classNames="myT" timeout={500}>
            <>
              {lemonadeCount > 19 && (
                <LemonSqueezerModule
                  addSqueezer={this.addSqueezer}
                  squeezerCost={squeezerCost}
                  squeezerCount={squeezerCount}
                  funds={funds}
                />
              )}
            </>
          </CSSTransition>
          <CSSTransition in={lemonadeCount > 49} classNames="myT" timeout={500}>
            <>
              {lemonadeCount > 49 && (
                <MarkettingModule
                  marketting={marketting}
                  markettingCost={markettingCost}
                  incMarketting={this.incMarketting}
                  funds={funds}
                />
              )}
            </>
          </CSSTransition>
          <CSSTransition in={lemonadeCount > 99} classNames="myT" timeout={500}>
            <>
              {lemonadeCount > 99 && (
                <TreeModule
                  treeCost={treeCost}
                  treeCount={treeCount}
                  funds={funds}
                  addTree={this.addTree}
                />
              )}
            </>
          </CSSTransition>
        </div>
      </div>
    );
  }

  incMarketting = () => {
    const { funds, marketting, markettingCost } = this.state;
    if (funds >= markettingCost) {
      this.setState({
        funds: funds - markettingCost,
        markettingCost: markettingCost * 2,
        marketting: marketting + 1
      });
    }
  };

  makeLemonade = () => {
    const { gameStarted, lemonadeCount, lemonadeStock, lemons } = this.state;
    if (!gameStarted) {
      this.setState({ gameStarted: true });
      this.handleNewPurchase();
    }
    if (lemons > 0)
      this.setState({
        lemonadeCount: lemonadeCount + 1,
        lemonadeStock: lemonadeStock + 1,
        lemons: lemons - 1
      });
  };

  handleNewPurchase = () => {
    const { price, marketting } = this.state;
    const interval = (price * 10) / Math.pow(2, marketting - 1);
    setTimeout(() => {
      this.buyLemonade();
      this.handleNewPurchase();
    }, Math.random() * interval);
  };

  buyLemonade = () => {
    const { lemonadeStock, funds, price } = this.state;
    if (this.state.lemonadeStock > 0) {
      this.setState({ lemonadeStock: lemonadeStock - 1, funds: funds + price });
    }
  };

  buyLemons = () => {
    const { lemons, funds, lemonsPrice } = this.state;
    if (funds >= lemonsPrice)
      this.setState({ lemons: lemons + 5, funds: funds - lemonsPrice });
  };

  addLemons = () => {
    const { lemons } = this.state;
    this.setState({ lemons: lemons + 20 });
  };

  incPrice = num => {
    const { price } = this.state;
    this.setState({ price: price + num });
  };

  addSqueezer = () => {
    const { squeezerCost, squeezerCount, funds } = this.state;
    if (funds >= squeezerCost) {
      this.setState({
        squeezerCost: squeezerCost * 2,
        squeezerCount: squeezerCount + 1,
        funds: funds - squeezerCost
      });
      setInterval(this.makeLemonade, 1000);
    }
  };

  addTree = () => {
    const { treeCost, treeCount, funds } = this.state;
    if (funds >= treeCost) {
      this.setState({
        treeCost: treeCost * 2,
        treeCount: treeCount + 1,
        funds: funds - treeCost
      });
      setInterval(this.addLemons, 5000 + Math.random() * 5000);
    }
  };

  setAnimate = event => {
    console.log(event.target);
    event.target.className = "animated";
  };
}

export default App;
