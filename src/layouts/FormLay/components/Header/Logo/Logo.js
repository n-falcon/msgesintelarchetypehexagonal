import './Logo.scss'
import React from 'react'
import apiConfig from '../../../../../config/api'

export default ({ currentUser }) => {
  return (
    <div className="logo">
      <img src={ apiConfig.url + '/../getImageClientUser/' + currentUser.userId + '/' + currentUser.subclienteId } alt="" />
    </div>
  )
}
