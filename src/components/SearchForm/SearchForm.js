import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component{
  constructor() {
    super()
    this.state = {search: ''}
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  noReload(event) {
    event.preventDefault()
  }

  render() {
    return (
      <header>
        <h1 className="header--h1">What's <span className="header--span">New?</span></h1>
        <input className="header--input" placeholder="Search for news article here."></input>
        <button className="header--button">Search Now</button>
      </header>
    )
  }
}
export default SearchForm