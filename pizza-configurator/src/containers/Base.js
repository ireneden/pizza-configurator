import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'
import {newPrice} from '../actions/price'
import {newChoiceBase} from '../actions/baseChoice'
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

export class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', price: ''}

    this.handleChange = this.handleChange.bind(this);
    this.findIngredient = this.findIngredient.bind(this);
  }

  handleChange(event) {
    this.props.newChoiceBase(event.target.value)
    const ingredient = ingredientsOptions.filter(element =>{return element.name === event.target.value})
    const ingredientPrice = ingredient[0].price
    this.props.newPrice(ingredientPrice)
    console.log(newPrice(ingredientPrice))
  }

  findIngredient(ingredient) {ingredientsOptions.filter(element =>{return element.name === ingredient})
  }

  render() {
    return (
      <div>
          First of all, pick your base:
         <Select
            onChange={this.handleChange}
          >
            <MenuItem value="25cm NY Style">25cm NY Style</MenuItem>
            <MenuItem value="30cm NY Style">30cm NY Style</MenuItem>
            <MenuItem value="35cm NY Style">35cm NY Style</MenuItem>
            <MenuItem value="20cm NY Style">20cm NY Style</MenuItem>
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

export default connect(mapStateToProps, {newPrice, newChoiceBase})(Base)
