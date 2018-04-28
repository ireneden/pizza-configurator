import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import Base from './Base.js'
import '../App.css'


export class PriceCalculator extends PureComponent {


  render() {
    return (
      <div className="PriceCalculator">
        <h3>Total price (excluding delivery options): </h3>
        <h2>{this.props.price}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        price: state.price
    }
}

export default connect(mapStateToProps)(PriceCalculator)
