import React, { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { StationList, StationPane, StationSearch } from './Stations'
import { Loader } from './Utils'

const pollInterval = 30 * 1000

const apiUrl = '/api/stations/stations.json'

const filterByStatus = ({ statusValue, testStation }) => statusValue === 'In Service' && !testStation

const searchByQuery = (stations, query) => stations.filter(
  station => station.stationName.toUpperCase().includes(query.toUpperCase()) // case-insensitive
)

const findById = (stations, id) => stations.find(station => station.id === +id)

const App = props => {
  const [allStations, setAllStations] = useState([])
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)
  const [station, setStation] = useState(null)
  const [query, setQuery] = useState('')

  const onSelect = debounce(
    id => setStation(findById(stations, id)), 50
  )

  const onSearch = query => {
    setQuery(query)

    const filtered = query
      ? searchByQuery(allStations, query)
      : allStations

    setStations(filtered)
    setStation(filtered[0])
  }

  const fetchStations = () => {
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          res.json()
            .then(onFetch)
            .catch(onError)
        } else {
          onError(res)
        }
      })
      .catch(onError)
  }

  const onFetch = data => {
    const stations = data.stationBeanList.filter(filterByStatus)

    setAllStations(stations)
    setStations(query ? searchByQuery(stations, query) : stations)
    setStation(station ? findById(stations, station.id) : stations[0])
    setLoading(false)
  }

  const onError = err => {
    console.error(err)

    import(/* webpackChunkName: "data" */ './data.json').then(onFetch)
  }

  useEffect(fetchStations, [])

  useEffect(() => {
    const id = setInterval(() => fetchStations(), pollInterval)
    return () => clearInterval(id)
  })

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
