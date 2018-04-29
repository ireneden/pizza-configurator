import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'

// let allPrices = [];


export class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', price: ''}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, price: this.props.price});
    this.props.dispatch({type:"NEW_CHOICE", payload: event.target.value})
    for(var i = 0; i < ingredientsOptions.length; i++) {
        if (ingredientsOptions[i].name === event.target.value) {
            let prices = ingredientsOptions[i].price
            // let pricesNumbers = parseFloat(ingredientsOptions[i].price)
            console.log(prices)
            // allPrices.push(prices)
            // console.log(allPrices)
            // let newPrice = allPrices.reduce((a, b) => a + b, 0)
            // console.log(newPrice)
            // return newPrice
        }
    }
  }

  render() {
    return (
      <div>
        <label>
          First of all, pick your base:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="25cm NY Style">25cm NY Style € 8,99</option>
            <option value="30cm NY Style">30cm NY Style € 11,49</option>
            <option value="35cm NY Style">35cm NY Style € 13,49</option>
            <option value="20cm NY Style">20cm NY Style € 6,45</option>
          </select>
        </label>
        <p>total:{this.handleChange.prices}</p>
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
  return {
    price: reduxState.price,
    name: reduxState.name
  }
}

export default connect(mapStateToProps)(Base)
