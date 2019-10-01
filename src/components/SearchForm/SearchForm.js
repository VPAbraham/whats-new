import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <h1 className="header--h1">What's <span className="header--span">New?</span></h1>
        <input className="header--input" onfocus="this.value=''" placeholder="Search for news article here."></input>
        <button className="header--button">Search Now</button>
      </header>
    )
  }
}
export default SearchForm