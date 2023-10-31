import { Navbar, Footer } from "../components";

import {  useSelector } from 'react-redux'
import Movie from "../components/Movie";


function Home() {
  const value = useSelector((state)=> state.inputReducer.inputValue);
  console.log(value)
  return (
    <>
     <div>
       <Navbar />
       <Movie value={value} />
      
       <Footer />
       </div> 
    </>
  )
}

export default Home