import React from 'react'
import { connect } from 'react-redux'
import '../App.css'


export class Sauce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

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
      <div>
        <label>
          Then choose your favourite sauce:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="WhiteSauce">White sauce</option>
            <option value="RedSauce">Red sauce</option>
            <option value="DoubleRedSauce">Double red sauce € 1,00</option>
            <option value="Mix">Mix it up € 1,50</option>
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

export default connect(mapStateToProps)(Sauce)
