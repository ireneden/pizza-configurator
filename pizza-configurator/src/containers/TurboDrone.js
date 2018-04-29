import React from 'react'
import { connect } from 'react-redux'
import Toggle from 'react-toggle'
import '../App.css'


export class TurboDrone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:true};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
  }


  render() {
    return (
      <div>
        <label>
          <b>Superhangry?</b> Have your pizza delivered turboquickly with our drone!
            <option value="TurboDrone" className="turbodrone-label">Add Turbo Drone delivery</option>
        </label>
        <Toggle defaultChecked={this.state.value} value="TurboDrone" onChange={this.handleInputChange}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pizzaBase: state.pizzaBase,
    pizzaSauce: state.pizzaSauce,
    pizzaTopping1: state.pizzaTopping1,
    pizzaTopping2: state.pizzaTopping2,
    pizzaTopping3: state.pizzaTopping3,
  }
}

export default connect(mapStateToProps)(TurboDrone)
