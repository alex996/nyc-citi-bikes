# NYC Citi Bikes

NYC Citi Bike stations in real time. Built with [React 16.8+](https://reactjs.org/) and [Create-React-App](https://github.com/facebook/create-react-app).

## Features

- live stats from JSON [API](https://feeds.citibikenyc.com/stations/stations.json)
- interval polling (every 30 sec)
- fallback to cached results
- text search (by name)
- detailed info (on hover)
- optimized rendering ([virtual list](https://github.com/bvaughn/react-window))

## Criteria

- locations listing (name, availability %)
- full details on hover (total, lat, long, etc.)
- only `In Service` and not `testStation`

## Setup

```sh
# Install deps
yarn

# Launch dev server
yarn start

# (Optional) Build assets
yarn build

# (Optional) Serve locally
yarn serve
```

## Deployment

Requires a server that will proxy requests for `stations.json` through `feeds.citibikenyc.com` due to missing CORS headers (ex: [Express](https://npm.im/express) + [http-proxy-middleware](https://npm.im/http-proxy-middleware)).
