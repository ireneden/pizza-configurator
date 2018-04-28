import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class TurboDrone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:true};

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [value]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Superhangry? Have your pizza delivered turboquickly with our drone!
            <option value="TurboDrone">Add Turbo Drone delivery!</option>
        </label>
        <input type="checkbox" checked={this.state.value} value="Checkbox" onChange={this.handleInputChange} className="turbodrone-toggle"/>
      </form>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    price: reduxState.price,
    name: reduxState.name
  }
}

export default connect(mapStateToProps)(TurboDrone)
