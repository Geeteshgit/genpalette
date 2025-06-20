import React from 'react'
import WebsiteVisualizerOne from './Websites/WebsiteVisualizerOne'
import WebsiteVisualizerTwo from './Websites/WebsiteVisualizerTwo'

const WebsiteVisualizer = () => {
  return (
    <div className='grid gap-5'>
      <WebsiteVisualizerOne />
      <WebsiteVisualizerTwo />
    </div>
  )
}

export default WebsiteVisualizer