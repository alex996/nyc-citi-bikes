import React, { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { StationList, StationPane, StationSearch } from './Stations'
import { Loader } from './Utils'
import data from './data.json'

const stationsFilter = ({ statusValue, testStation }) => statusValue === 'In Service' && !testStation

const allStations = data.stationBeanList.filter(stationsFilter)

const App = props => {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)
  const [station, setStation] = useState(null)
  const [query, setQuery] = useState('')

  const onSelect = debounce(
    id => setStation(stations.find(station => station.id === +id)), 50
  )

  const onSearch = query => {
    setQuery(query)

    const filtered = query
      ? allStations.filter(
        station => station.stationName.toUpperCase().includes(query.toUpperCase()) // case-insensitive
      )
      : allStations

    setStations(filtered)
    setStation(filtered[0])
  }

  useEffect(() => {
    setStations(allStations)
    setLoading(false)
    setStation(allStations[0])
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <StationSearch query={query} onSearch={onSearch} />
      <StationList stations={stations} onSelect={onSelect} />
      <StationPane station={station} />
    </>
  )
}

export default App
