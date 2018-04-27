import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class Base extends React.Component {
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
          First you pick your base. You have four options:
          <select value={this.state.value} onChange={this.handleChange}>
            <option type="25cm" value="8.99">1. 25cm NY Style € 8,99</option>
            <option type="30cm" value="11.49">2. 30cm NY Style € 11,49</option>
            <option type="35cm" value="13.49">3. 35cm NY Style € 13,49</option>
            <option type="20cm" value="6.45">4. 20cm NY Style € 6,45</option>
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

export default connect(mapStateToProps)(Base)
