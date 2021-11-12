import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overwiew: "This film created the 2019 and the best film",
        imageUrl:
          "https://images.moviesanywhere.com/54e4356f686ba20ee680e14fb2395034/54cce72e-d982-4e76-8551-0e88bc63fd5d.jpg?h=375&resize=fit&w=250",
      },
      {
        id: 2,
        name: "The Most Film",
        rating: 7.6,
        overwiew: "This film created the 2019 and the best film",
        imageUrl:
          "https://www.themoviedb.org/t/p/w220_and_h330_face/ir9eyz1mtgsohjvo7UYtqUfFuES.jpg",
      },
      {
        id: 3,
        name: "The Harry Potters",
        rating: 6.3,
        overwiew: "This film created the 2019 and the best film",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRGY9R0deCAkZZ9PemNzl7DZNJWrcUasOhg&usqp=CAU",
      },
      {
        id: 4,
        name: "Loading...",
        rating: 8.7,
        overwiew: "This film created the 2019 and the best film",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm92FD_Q0LmR0g8ZzQcBLkwJLN6BXHBLNkyw&usqp=CAU",
      },
      {
        id: 5,
        name: "BEst",
        rating: 5.6,
        overwiew: "This film created the 2019 and the best film",
        imageUrl:
          "https://filmyfocus.com/wp-content/uploads/2021/09/NET-Movie-Review-and-Rating-Eng-1.jpg",
      },
      {
        id: 6,
        name: "Squid Games",
        rating: 7.7,
        overwiew: "This film created the 2019 and the best film",
        imageUrl:
          "https://www.murphysmultiverse.com/wp-content/uploads/2021/09/dlkjflksjfsfs.jpg",
      },
    ],
    searchQuery: ""
  };

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
        return movie.name.indexOf(this.state.searchQuery)!==-1
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
