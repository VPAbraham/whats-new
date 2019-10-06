import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component{
  constructor() {
    super()
    this.state = {search: ''}
  }

  submitSearch = (event) => {
    this.setState({ search: event.target.value })
    this.props.filterArticles(event.target.value)
  }

  preventReload = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <header className="SearchForm">
        <h1 className="header--h1">What's 
          <span className="header--span">New?</span>
        </h1>
        <input 
          className="header--input" 
          placeholder="Search for news article here."
          name="search"
          value={this.state.search}
          onChange={event => this.preventReload(event)}>
        </input>
        <button 
          className="header--button"
          onClick={event => this.submitSearch(event)}>
          Search Now
        </button>
      </header>
    )
  }
}
export default SearchForm