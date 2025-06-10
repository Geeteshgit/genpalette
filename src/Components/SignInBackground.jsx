import React from 'react'
import { signInBackgroundColors } from '../data/paletteSet'

const SignInBackground = () => {
  return (
    <div className='flex-1 flex flex-col'>
        {signInBackgroundColors.map((palette, idx) => {
            return (
                <div key={idx} className='flex-1 flex'>
                    {palette.map((color, idx) => {
                        return (
                            <div key={idx} style={{ backgroundColor: color }} className='w-full' />
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default SignInBackground