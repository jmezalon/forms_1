import React from 'react';
const countries = require('./Countries.json');


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      reason: "",
      formCompleted: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({formCompleted: true})
  }

  render() {
    return (
      <>
        <h1>Mission to Mars Registration Form</h1>
        <div>
          <form onChange={this.handleChange}>
            <label htmlFor="name" >Name</label>
            <input name="name" type="text" placeholder="Full Name" value={this.state.name} id="name"/>
            <label htmlFor="DOB"> Date Of Birth: </label>
            <input type="date" id="dob" name="trip" value={this.state.trip} min="1900-01-01" max="2019-12-31" />

            <label htmlFor="Country">Country</label>
            <select onChange={this.handleChange} name="Countries">
            {["", ...countries].map(country => (
              <option value={country.name}>{country.name}</option>
            ))}
            </select>

            <label htmlFor="dietary">What do you want to Eat?</label>
            <select name="diet">
              <option value="omnivore">Omnivore</option>
              <option value="vegeterian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>

            <label htmlFor="yourReason">why do want to be a Mars Explorer?</label>
            <input name="reason" placeholder="explain why we should select you!" type="text" id="reason" value={this.state.reason} />

            <button onSubmit={this.handleSubmit}>submit</button>

          </form>

        </div>
      </>
    )
  }
}

export default Form
