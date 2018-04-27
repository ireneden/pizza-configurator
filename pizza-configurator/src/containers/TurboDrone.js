import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class TurboDrone extends React.Component {
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
          Superhangry? Have your pizza delivered turboquickly with our drone!
          <select value={this.state.value} onChange={this.handleChange}>
            <option type="TurboDrone" value="{}" >Add Turbo Drone delivery!</option>
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

export default connect(mapStateToProps)(TurboDrone)
