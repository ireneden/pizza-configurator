import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'



export class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.dispatch({type:"NEW_CHOICE", payload: event.target.value})

    let foundIngredient = false;
    for(var i = 0; i < ingredientsOptions.length; i++) {
        if (ingredientsOptions[i].name === event.target.value) {
            foundIngredient = true;
            return alert(ingredientsOptions[i].price)
            break;
        }
    }}

  render() {
    return (
        <label>
          First of all, pick your base:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="25cm NY Style">25cm NY Style € 8,99</option>
            <option value="30cm NY Style">30cm NY Style € 11,49</option>
            <option value="35cm NY Style">35cm NY Style € 13,49</option>
            <option value="20cm NY Style">20cm NY Style € 6,45</option>
          </select>
        </label>
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
