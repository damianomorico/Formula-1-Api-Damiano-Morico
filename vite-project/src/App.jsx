import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import { Home } from './Components/Home'
import { Seasons } from './Components/Seasons'
import { Races } from './Components/Races'
import { Season } from './Components/Season'
import { Race } from './Components/Race'

class App extends Component {
  render() {
    return (
      <>
        < Router >
          < Routes >
            <Route path="/" element={<Home />} />
            <Route path="seasons">
              <Route path="" element={<Seasons />} />
              <Route path=":seasonId">
                <Route path="" element={<Season />} />
                <Route path="races" element={<Races />} />
                <Route path="races/:raceId" element={<Race />} />
              </Route>
            </Route>
          </Routes>
        </Router >
      </>
    );
  }
}

export default App