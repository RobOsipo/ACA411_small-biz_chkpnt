import React from 'react'

const MapTable = ({name, description, hours, address}) => {
  return (
    <>
        <tr>
        <th>{name}</th>
        <th>{description}</th>
        <th>{hours}</th>
        <th>{address}</th>
        </tr>
    </>
  )
}

export default MapTable