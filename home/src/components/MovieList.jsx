import React from "react";

const MovieList = (props) => {
  // function handleClick(e) {
  //   e.preventDefault();
  //   // console.log(event.pageY);
  // }

  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              alt="Sample Movie"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            />
            <div className="card-body"></div>
            <h5 className="card-title"> {movie.title} </h5>
            <p className="card-text">{movie.overview}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button
                onClick={(event) => props.deleteMovieProp(movie)}
                style={{ marginLeft: "5px" }}
                type="button"
                className="btn btn-md btn-outline-danger"
              >
                Delete
              </button>
              <h2>
                <span
                  style={{
                    backgroundColor: "cornflowerblue",
                    marginRight: "11px",
                    color: "white",
                  }}
                  className=" mb-0 badge badge-info"
                >
                  {movie.vote_average}
                </span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
