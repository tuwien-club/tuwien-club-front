//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
//> Maps
import GoogleMapReact from 'google-map-react'

//> CSS
import './index.scss'
//> Images
import {StaticImage} from 'gatsby-plugin-image'
//#endregion

//#region > Config
const defaultProps = {
  center: {
    lat: 46.576528,
    lng: 13.950935
  },
  zoom: 14
}
//#endregion

//#region > Components
const AnyReactComponent = ({}) => (
  <div style={{marginTop: '-25px', marginLeft: '-25px'}}>
    <StaticImage
      src="../../../images/marker.png"
      alt="Marker"
      style={{height: '50px', width: '50px'}}
    />
  </div>
)

export default function MapSection({}) {
  return (
    <section className="map-section">
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.GATSBY_GOOGLE_MAPS_API_KEY}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />
      </GoogleMapReact>
    </section>
  )
}
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
