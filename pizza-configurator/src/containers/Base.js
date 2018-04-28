import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
// import {baseOptions} from '../ingredientsList'


export class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this);
  }

  name(option){
       this.props.dispatch({type:"NEW_CHOICE", payload: this.state.value})
     }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


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
