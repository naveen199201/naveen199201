import React from 'react'
import { Footer,  Navbar } from "../components"
import {  useSelector } from 'react-redux'
import Movie from '../components/Movie';

const Movies = () => {
  const value = useSelector((state)=> state.inputReducer.inputValue);
  console.log(value);
  return (
    <>
      <Navbar />
      <Movie value={value} />
      <Footer />
    </>
  )
}

export default Movies