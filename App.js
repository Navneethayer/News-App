
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return (
  
      <div>
      <Router>
        <NavBar/>
        {/* <LoadingBar
           color='#f11946'
           progress={10}
          //  onLoaderFinished={()=> setProgress(0)}
         />   */}
        <Routes>
          {/* <Route path="/about">
          <News pageSize={5} country="in" category="sports"/>
          </Route> */}
          <Route exact path="/"  element = {<News pageSize = {this.pageSize} key="ge"country = "in" category = "general"/>}/>
          {/* <Route path="/about" element = {<News pageSize = {5} country = "in" category = "general"/>}/> */}
          <Route exact path="/business" element = {<News pageSize = {this.pageSize} key="business" country = "in" category = "business"/>}/>
          <Route exact path="/sports" element = {<News pageSize = {this.pageSize} key="sports"country = "in" category = "sports"/>}/>
          <Route exact path="/entertainment" element = {<News pageSize = {this.pageSize} key="entertainment" country = "in" category = "entertainment"/>}/>
          <Route exact path="/science" element = {<News pageSize = {this.pageSize} country = "in" key="science" category = "science"/>}/>
          <Route exact path="/technology" element = {<News pageSize = {this.pageSize} country = "in" key="technology" category = "technology"/>}/>
          <Route exact path="/general" element = {<News pageSize = {this.pageSize} country = "in" key="general" category = "general"/>}/>
          <Route exact path="/health" element = {<News pageSize = {this.pageSize} country = "in" key="health" category = "health"/>}/>
       </Routes>

      </Router>
      </div>

    )
  }
}
