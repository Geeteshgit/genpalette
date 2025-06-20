import React from 'react'
import ShapeVisualizerOne from './Shapes/ShapeVisualizerOne'
import ShapeVisualizerTwo from './Shapes/ShapeVisualizerTwo'
import ShapeVisualizerThree from './Shapes/ShapeVisualizerThree'
import ShapeVisualizerFour from './Shapes/ShapeVisualizerFour'
import ShapeVisualizerFive from './Shapes/ShapeVisualizerFive'
import ShapeVisualizerSix from './Shapes/ShapeVisualizerSix'

const ShapesVisualizer = () => {
  return (
    <div className='grid md:grid-cols-2 gap-5'>
      <ShapeVisualizerOne />
      <ShapeVisualizerTwo />
      <ShapeVisualizerThree />
      <ShapeVisualizerFour />
      <ShapeVisualizerFive />
      <ShapeVisualizerSix />
    </div>
  )
}

export default ShapesVisualizer