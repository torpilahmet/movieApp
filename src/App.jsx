import { useState } from 'react'
import './App.css'
import Home from "./Pages/Home/Home.jsx";
import MyList from "./Pages/Mylist/MyList.jsx";
import Navbar from "./componenets/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router";
import {HOME, MY_LIST} from "./constans/path.jsx"

function App() {

  return (<div className="App">
        <Navbar/>
          <Routes>
              <Route path={HOME} element={<Home/>}/>
              <Route path={MY_LIST} element={<MyList/>}/>
              <Route path="/mylist/:id" element={<MyList/>}/>
          </Routes>
  </div>

  )
}

export default App
