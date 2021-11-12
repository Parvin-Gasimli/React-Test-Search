import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  };
  async componentDidMount(){
     const baseUrl="http://localhost:3002/movies";
     const response = await fetch(baseUrl);
     console.log(response)
     const data=await response.json();
     console.log(data);
     this.setState({movies:data})
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({
      movies: newMovieList,
    });
  };
  SearchMovie=(event)=>{
    // console.log(event.target.value)
this.setState({searchQuery:event.target.value})
  }

  render() {
    let filterMovies=this.state.movies.filter(
      (movie)=>{
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1
      }
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar SearchMovieProp={this.SearchMovie} />
          </div>
        </div>
        <MovieList
          movies={filterMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}
export default App;
