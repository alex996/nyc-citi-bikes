export const pollInterval = 30 * 1000

export const apiUrl = '/api/stations/stations.json'

export const filterByStatus = ({ statusValue, testStation }) => statusValue === 'In Service' && !testStation

export const searchByQuery = (stations, query) => stations.filter(
  station => station.stationName.toUpperCase().includes(query.toUpperCase()) // case-insensitive
)

export const findById = (stations, id) => stations.find(station => station.id === +id)
