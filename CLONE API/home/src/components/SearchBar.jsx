import React, { Component } from "react";
import {Link} from 'react-router-dom'

class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      
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
            <div className="col-2">
              <Link
              to="/add"
               type="button" 
              className="btn mt-2  btn-md btn-danger"
              style={{float:'right'}}
              
              >
                Add Movie


              </Link>

            </div>
          </div>
        </form>
    
    );
  }
}

export default SearchBar;
