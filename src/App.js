import React, { useState, useEffect } from 'react'
import { StationList, StationPane } from './Stations'
import { Loader } from './Utils'
import data from './data.json'

const stationsFilter = ({ statusValue, testStation }) => statusValue === 'In Service' && !testStation

const App = props => {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)
  const [station, setStation] = useState(null)

  const onSelect = id => setStation(stations.find(station => station.id === +id))

  useEffect(() => {
    const stations = data.stationBeanList.filter(stationsFilter)
    setStations(stations)
    setLoading(false)
    setStation(stations[0])
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <StationList stations={stations} onSelect={onSelect} />
      <StationPane station={station} />
    </>
  )
}

export default App
