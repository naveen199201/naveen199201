import React from 'react'

import { useSelector } from 'react-redux'
import { Navbar } from '../components';
import Movie from '../components/Movie';


const Search = () => {
  const value = useSelector((state) => state.inputReducer.inputValue);
 console.log('value',value);

  return (
    <>
      
      <Navbar></Navbar>
      <Movie value={value}></Movie>
      

    </>
  )
}
export default Search