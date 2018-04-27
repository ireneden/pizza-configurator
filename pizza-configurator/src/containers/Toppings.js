import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class Toppings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select up to 3 toppings:
          <select value={this.state.value} onChange={this.handleChange}>
            <option type="Pineapple" value="0.5">1. Pineapple</option>
            <option type="Corn" value="0.5">2. Corn</option>
            <option type="Olives" value="0.5">3. Olives (green)</option>
            <option type="RedOnions" value="0.5">4. Red onions</option>
            <option type="Spinach" value="0.5">5. Spinach</option>
            <option type="CherryTomatoes" value="0.5">6. Cherry tomatoes</option>
            <option type="Chicken" value="0.5">7. Chicken</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    price: reduxState.price,
    chosenOption: reduxState.chosenOption
  }
}

export default connect(mapStateToProps)(Toppings)
