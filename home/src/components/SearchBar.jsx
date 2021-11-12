import React, { Component } from "react";

class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row mb-5 mt-5">
            <div className="col-12">
              <input
                onChange={this.props.SearchMovieProp }
                type="text"
                className="form-control"
                placeholder="Search a movie"
                value={this.props.searchQuery}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
