import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  // function handleClick(e) {
  //   e.preventDefault();
  //   // console.log(event.pageY);
  // }
  const truncateOverWiev=(string,maxlength)=>{
    if(!string) return null;
    if(string.length<=maxlength) return string;
    return `${string.substring(0,maxlength)} ...`
  }

  return (
    <div className="row">
      {props.movies.map((movie,i) => (
        <div className="col-lg-4" key={i}>
          <div className="card mb-4 shadow-sm" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              alt="Sample Movie"
              src={movie.imageurl}
            />
            <div className="card-body"></div>
            <h5 className="card-title"> {movie.name} </h5>
            <p className="card-text">{truncateOverWiev(movie.overwiew,10)}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button
                onClick={(event) => props.deleteMovieProp(movie)}
                style={{ marginLeft: "5px" }} type="button" className="btn btn-md btn-outline-danger" >
                Delete
              </button>
              <Link type="button"
              className="btn btn-md btn-outline-primary"
              to={ `edit/${movie.id}`}
              
              > Edit </Link>
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
