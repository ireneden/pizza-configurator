import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class Toppings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
  }

  name(option){
       this.props.dispatch({type:"NEW_CHOICE", payload: this.state})
     }

     handleChange(event) {
       this.setState({value: event.target.value});
       this.props.dispatch({type:"NEW_CHOICE", payload: event.target.value})
     }


  render() {
    return (
      <div>
        <label>
          Select your topping:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Pineapple">Pineapple</option>
            <option value="Corn">Corn</option>
            <option value="Olives">Olives (green)</option>
            <option value="RedOnions">Red onions</option>
            <option value="Spinach">Spinach</option>
            <option value="CherryTomatoes">Cherry tomatoes</option>
            <option value="Chicken">Chicken</option>
          </select>
        </label>
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

export default connect(mapStateToProps)(Toppings)
