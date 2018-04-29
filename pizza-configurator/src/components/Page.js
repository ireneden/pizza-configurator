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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 // name(option){
 //      this.props.dispatch({type:"NEW_CHOICE", payload: this.state.value})
 //    }

    // handleSubmit(event) {
    //        event.preventDefault()
    //        this.value(this.props.value)
    //        event.preventDefault();
    //      }


  render() {
    return (
        <div className="App-page">
          <h1 className="App-title">Welcome to the pizza configurator!</h1>
            <div className = "Pizza-configurator">
            <form>
              <Base className="Base" />
              <Sauce className="Sauce" />
              <h4>Now select up to 3 toppings!</h4>
              <Toppings className="Toppings1" />
              <Toppings className="Toppings2" />
              <Toppings className="Toppings3" />
              <PriceCalculator />
              <TurboDrone className="Turbodrone" onSubmit={this.newChoice} />
              <p className="Turbodrone-p">Your Final Price is: (price including 10% turbodrone)</p>
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

export default connect(mapStateToProps, {newChoice})(Page)
