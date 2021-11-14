import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };
  // async componentDidMount(){
  //    const baseUrl="http://localhost:3002/movies";
  //    const response = await fetch(baseUrl);
  //    console.log(response)
  //    const data=await response.json();
  //    console.log(data);
  //    this.setState({movies:data})
  // }
  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    // console.log(response)
    this.setState({ movies: response.data });
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
  //   this.setState({
  //     movies: newMovieList,
  //   });
  // };

  //Fetch Api
  // deleteMovie = async(movie) => {
  //   const baseUrl=`http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseUrl,{
  //     method:"DELETE"
  //   })
  //   const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
  //   this.setState({
  //     movies: newMovieList,
  //   });
  // };

  //AXIOUS  API
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({
      movies: newMovieList,
    });
  };

  SearchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filterMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      
      <Router>
        <div className="container">
        
      <Switch> <Route path="/add" component={AddMovie}/>

          <Route
            path="/"
           
            render={() => (
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar SearchMovieProp={this.SearchMovie} />
                  </div>
                </div>

                <MovieList
                  movies={filterMovies}
                  deleteMovieProp={this.deleteMovie}
                />
              </React.Fragment>
            )}
          >
          </Route>

          
          </Switch>
        </div>
      
      </Router>
    );
  }
}
export default App;