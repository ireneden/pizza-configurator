import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'
import {newPrice} from '../actions/price'
import {newChoiceSauce} from '../actions/sauceChoice'


export class Sauce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', price: ''}

    this.handleChange = this.handleChange.bind(this);
    this.findIngredient = this.findIngredient.bind(this);}


    handleChange(event) {
      this.props.newChoiceSauce(event.target.value)
      const ingredient = ingredientsOptions.filter(element =>{return element.name === event.target.value})
      const ingredientPrice = ingredient[0].price
      this.props.newPrice(ingredientPrice)
    }

    findIngredient(ingredient) {ingredientsOptions.filter(element =>{return element.name === ingredient})
    }

  render() {
    return (
      <div>
        <label>
          Then choose your favourite sauce:
          <select onChange={this.handleChange}>
            <option value="WhiteSauce">White sauce</option>
            <option value="RedSauce">Red sauce</option>
            <option value="DoubleRedSauce">Double red sauce € 1,00</option>
            <option value="Mix">Mix it up € 1,50</option>
          </select>
        </label>
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
  return {
    prices: reduxState.prices,
    name: reduxState.name
  }
}

export default connect(mapStateToProps, {newPrice, newChoiceSauce})(Sauce)
