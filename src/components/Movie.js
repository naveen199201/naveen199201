import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom"; 

const Movie = (props) => {
  // const value=useSelector((state)=>state.inputHandler.inputText)
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const value=props.value;
  console.log('value', value);
  
  useEffect(() => {
    const getMovies = async (value) => {

      if (value !== "") {
      const response = await fetch(`https://movie-five-ochre.vercel.app/api/movies/?q=${value}` )
      setData(await response.clone().json());
        setFilter(await response.json());
        console.log(data)
      } else {
      const response = await fetch("https://movie-five-ochre.vercel.app/api/movies/")
      setData(await response.clone().json());
        setFilter(await response.json());
    }
  };
    getMovies(value);
  }, [value]);

  const filterMovie = (cat) => {
    const updatedList = data.filter((item) => item.location === cat);
    setFilter(updatedList);
  }
  // console.log(value)
  // console.log(data)
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterMovie("hyderabad")}>Hyderabad</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterMovie("delhi")}>Delhi</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterMovie("chennai")}>Chennai</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterMovie("mumbai")}>Movie</button>
        </div>

        {filter.map((movie) => {
          return (
            <div id={movie.id} key={movie.id} className="col-md-3 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={movie.id}>
                <img
                  className="card-img-top p-3"
                  src={movie.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movie.title.substring(0, 12)}...
                  </h5>
                  {/* <p className="card-text">
                    {movie.description.substring(0, 90)}...
                  </p> */}
                </div>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item lead">$ {movie.price}</li> */}
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/seats"} className="btn btn-dark m-1">
                    Book Now
                  </Link>
                  
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-6 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Movies</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </>
  );
};

export default Movie;
