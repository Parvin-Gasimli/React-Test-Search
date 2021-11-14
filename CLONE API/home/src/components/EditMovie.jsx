import axios from "axios";
import React, { Component } from "react";

class EditMovie extends Component {
  state = {
    name: "",
    rating: "",
    overwiew: "",
    imageurl: "",
  };
  async componentDidMount() {
    const id = this.props.match.params.id;

    console.log(id);

    const response = await axios.get(` http://localhost:3002/movies/${id}`);
    const movie = response.data;
    this.setState({
      name: movie.name,
      rating: movie.rating,
      overwiew: movie.overwiew,
      imageurl: movie.imageurl,
    });
  }
  onInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    //   e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {name,rating,overwiew,imageurl}=this.state;
    const id = this.props.match.params.id;
    const UpdateMovie={
        name,
        rating,
        overwiew,
        imageurl
        
    }
    this.props.UpdateMovie(id,UpdateMovie)
    this.props.history.push('/')

  };
  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To UPDATE A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageurl}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overwiew}
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Update Movie"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
