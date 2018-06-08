import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'
import {newPrice} from '../actions/price'
import {newChoiceToppings1} from '../actions/toppingsChoice1'
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';


export class Toppings1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', price: ''}

    this.handleChange = this.handleChange.bind(this);
    this.findIngredient = this.findIngredient.bind(this);}

  handleChange(event) {
    this.props.newChoiceToppings1(event.target.value)
    const ingredient = ingredientsOptions.filter(element =>{return element.name === event.target.value})
    const ingredientPrice = ingredient[0].price
    this.props.newPrice(ingredientPrice)
  }

  findIngredient(ingredient) {ingredientsOptions.filter(element =>{return element.name === ingredient})
  }

  render() {
    return (
      <div>
          Select your first topping:
          <Select
            onChange={this.handleChange}
          >            

            <MenuItem value="Pineapple">Pineapple</MenuItem>
            <MenuItem value="Corn">Corn</MenuItem>
            <MenuItem value="Olives">Olives (green)</MenuItem>
            <MenuItem value="RedOnions">Red onions</MenuItem>
            <MenuItem value="Spinach">Spinach</MenuItem>
            <MenuItem value="CherryTomatoes">Cherry tomatoes</MenuItem>
            <MenuItem value="Chicken">Chicken</MenuItem>
          </Select>
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

export default connect(mapStateToProps, {newPrice, newChoiceToppings1})(Toppings1)
