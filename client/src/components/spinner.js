import React from 'react'
import spinner from  '../static/loading.gif'

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="loading..."
        style= {{ width: '250px', margin: 'auto', display: 'block', paddingLeft: '250px' }}
      />
    </div>
  )
}