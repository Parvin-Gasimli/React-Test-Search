import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from 'axios';
require('dotenv').config()
// console.log(process.env.REACT_APP_APi_KEY)


class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  };
  // async componentDidMount(){
  //    const baseUrl="http://localhost:3002/movies";
  //    const response = await fetch(baseUrl);
  //    console.log(response)
  //    const data=await response.json();
  //    console.log(data);
  //    this.setState({movies:data})
  // }
  async componentDidMount(){
    const response =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APi_KEY}&language=en-US&page=1`);
   console.log(response.data.results)
    this.setState({movies:response.data.results})
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
  deleteMovie = async(movie) => {
   axios.delete(`http://localhost:3002/movies/${movie.id}`)
 
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
        return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1
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
