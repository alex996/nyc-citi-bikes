import React, { useState, useEffect } from 'react'
import { StationList } from './Stations'
import data from '../data.json'

const stationsFilter = ({ statusValue, testStation }) => statusValue === 'In Service' && !testStation

const App = props => {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stations = data.stationBeanList.filter(stationsFilter)
    setStations(stations)
    setLoading(false)
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <StationList stations={stations} />
  )
}

export default App
