import React, { Component } from 'react'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home'
import Chess from './Chess'


export default class GetRouters extends Component {
  render() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chess" element={<Chess />} />
  
            </Routes>
        </HashRouter>
    )
  }
}
