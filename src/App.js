import React, { useState, useEffect } from 'react'
import data from './data.json'

const App = props => {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stations = data.stationBeanList
      .filter(({ statusValue, testStation }) => statusValue === 'In Service' && !testStation)
    setStations(stations)
    setLoading(false)
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Citi Bike Stations</h1>
      <ul>
        {stations.map(({ id, stationName, availableDocks, totalDocks }) => (
          <li key={id}>
            <strong>Name:</strong> {stationName} {' '}
            <strong>Availability:</strong> {(availableDocks / totalDocks * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
