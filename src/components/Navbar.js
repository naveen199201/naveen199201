import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setInputvalue } from '../redux/action'
import {  Product} from "../components";
import { useNavigate } from 'react-router-dom';

// import {  useNavigate, Route, Routes } from 'react-router-dom';

const Navbar = () => {
    
    const value = useSelector((state)=> state.inputReducer.inputValue);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [inputText, setInputText] = useState('');
    console.log(value)
    
    const inputHandler = (e) => {  
        setInputText(e.target.value); 
        // const searchTerm= inputText;
        // dispatch(searchTermValue(searchTerm))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setInputvalue(inputText));
        Navigate("/search");
      };
      

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info py-3 sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> bookticket</NavLink>
                    <button className="navbar-toggler mx-2" type="button" data-toggle="expand" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center fw-bold">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home  </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li >
                                {/* <NavLink className="nav-link" to="/search"> */}
                                    {/* <Search></Search> */}
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            <input type="text" onChange={inputHandler}  />
                                        </label>
                                        <button type="submit">Search</button>
                                    </form>
                                {/* </NavLink> */}
                            </li>
                            {/* <Routes >
                            <Route path="/search" render={() => <Search inputText={inputText} />} />
                            </ Routes> */}
                        </ul>
                        <div className="buttons text-center">
                            <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                            
                        </div>
                    </div>


                </div>
            </nav>
            {/* <Product value={value} /> */}
        </>
    )
}

export default Navbar