import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class Sauce extends React.Component {
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
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Then choose your favourite sauce:
          <select value={this.state.value} onChange={this.handleChange}>
            <option type="WhiteSauce" value="0">1. White sauce</option>
            <option type="RedSauce" value="0">2. Red sauce</option>
            <option type="DoubleRedSauce" value="1.00">3. Double red sauce € 1,00</option>
            <option type="Mix" value="1.50">4. Mix it up € 1,50</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
  return {
    price: reduxState.price,
    chosenOption: reduxState.chosenOption
  }
}

export default connect(mapStateToProps)(Sauce)
