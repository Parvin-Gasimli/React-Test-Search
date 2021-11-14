import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditMovie from "./EditMovie";

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
  //ADD the Movie
  AddMovie = async (movie) => {
    await axios.post("http://localhost:3002/movies/", movie);
    this.setState((state) => ({
      movies: state.movies.concat(movie),
    }));
  };

  //UPDATE The Movie

  UpdateMovie = async (id,UpdateMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, UpdateMovie);
   
  };

  render() {
    let filterMovies = this.state.movies.filter(
      (movie) => {
          return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 ;
        }
    ).sort((a,b)=>{
      return a.id<b.id ? 1 :a.id>b.id? -1:0;
    });
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
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
            <Route path="/add"
              exact
              render={({history}) => (
                <AddMovie
                  AddMovie={(movie) => {
                    this.AddMovie(movie)
                    history.push("/")
                  }}
                />
              )}
            ></Route>
                 <Route path="/edit/:id"
              exact
              render={(props) => (
                <EditMovie
                {...props}
                  onEditMovie={(id,movie) => {
                    this.UpdateMovie(id,movie)
              
                  }}
                />
              )}
            ></Route>

            {/* <Route path="/edit/:id" component={EditMovie} /> */}


          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
