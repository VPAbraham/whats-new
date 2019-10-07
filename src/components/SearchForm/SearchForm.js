import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component{
  constructor() {
    super()
    this.state = {search: ''}
  }

  submitSearch = () => {
    this.props.filterArticles(this.state.search)
    this.setState({ search: '' }) 
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
    event.preventDefault()
  }

  render() {
    return (
      <header className="SearchForm">
        <h1 className="header--h1">What's 
          <span className="header--span"> New?</span>
        </h1>
        <input 
          className="header--input" 
          placeholder="Search for news article here."
          name="search"
          value={this.state.search}
          onChange={event => this.handleChange(event)}>
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