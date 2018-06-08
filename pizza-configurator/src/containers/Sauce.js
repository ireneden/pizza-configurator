import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'
import {newPrice} from '../actions/price'
import {newChoiceSauce} from '../actions/sauceChoice'
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';


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
        Then select the sauce:
        <Select
            onChange={this.handleChange}
          >

            <MenuItem value="WhiteSauce">White sauce</MenuItem>
            <MenuItem value="RedSauce">Red sauce</MenuItem>
            <MenuItem value="DoubleRedSauce">Double red sauce € 1,00</MenuItem>
            <MenuItem value="Mix">Mix it up € 1,50</MenuItem>
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

export default connect(mapStateToProps, {newPrice, newChoiceSauce})(Sauce)
