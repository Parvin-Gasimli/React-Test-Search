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
              src={movie.imageUrl}
            />
            <div className="card-body"></div>
            <h5 className="card-title"> {movie.name} </h5>
            <p className="card-text">{movie.overwiew}</p>
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
                  {movie.rating}
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
