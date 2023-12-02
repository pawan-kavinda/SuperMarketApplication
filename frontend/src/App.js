import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import HomeCategories from './Components/Category/HomeCategories'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/home" element = {<Home/>}/>
     
    </Routes>
    
    </BrowserRouter>
  )
}

export default App