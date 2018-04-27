import React, { Component } from 'react';
import {connect} from 'react-redux'
import Base from '../containers/Base'
import Sauce from '../containers/Sauce'
import Toppings from '../containers/Toppings'
import TurboDrone from '../containers/TurboDrone'
import PriceCalculator from '../containers/PriceCalculator'
import {newChoice} from '../actions/choice'
import '../App.css'

class Page extends Component {
    newChoice = (choice) => {
    this.props.newChoice(choice)
  }

  render() {
    return (
        <div className="App-page">
          <h1 className="App-title">Welcome to the pizza configurator!</h1>
            <div className = "Pizza-configurator">
              <Base className="Base" onSubmit={this.newChoice} />
              <Sauce className="Sauce" onSubmit={this.newChoice} />
              <Toppings className="Toppings" onSubmit={this.newChoice} />
              <TurboDrone className="Turbodrone" onSubmit={this.newChoice} />
              <PriceCalculator />
            </div>
        </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
	  chosenOption: state.chosenOption,
    price: state.price
	}
}

export default connect(mapStateToProps, {newChoice})(Page)
