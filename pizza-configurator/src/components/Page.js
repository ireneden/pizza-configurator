import React, { Component } from 'react';
import {connect} from 'react-redux'
import Base from '../containers/Base'
import Sauce from '../containers/Sauce'
import Toppings from '../containers/Toppings'
import Toppings2 from '../containers/Toppings2'
import Toppings3 from '../containers/Toppings3'
import TurboDrone from '../containers/TurboDrone'
import PriceCalculator from '../containers/PriceCalculator'
import {newChoiceBase} from '../actions/baseChoice'
import '../App.css'


class Page extends Component {
    newChoiceBase = (choice) => {
    this.props.newChoice(choice)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <div className="App-page">
          <h1 className="App-title">Welcome to the pizza configurator!</h1>
            <div className = "Pizza-configurator">
            <form>
              <Base className="Base" />
              <Sauce className="Sauce" />
              <h3>Now select up to 3 toppings!</h3>
              <Toppings className="Toppings1" />
              <Toppings2 className="Toppings2" />
              <Toppings3 className="Toppings3" />
              <PriceCalculator />
              <TurboDrone onSubmit={this.newChoiceBase} />
              </form>
            </div>
        </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
	  name: state.name,
    price: state.price
	}
}

export default connect(mapStateToProps, {newChoiceBase})(Page)
