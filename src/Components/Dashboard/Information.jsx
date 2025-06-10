import React from 'react'

const Information = ({ name, email }) => {
  return (
    <div>
        <h2 className='text-xl sm:text-4xl lg:text-5xl font-semibold'>{name}</h2>
        <p className='sm:text-lg opacity-75'>{email}</p>
    </div>
  )
}

export default Information