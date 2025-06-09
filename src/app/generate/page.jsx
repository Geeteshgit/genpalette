import React from 'react'
import { auth } from '../lib/auth'
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Generate AI Color Palettes - GenPalette",
  description: "Describe your vision and let AI generate stunning 5-color palettes in seconds. Perfect for websites, branding, and UI/UX inspiration.",
};

const Generate = async () => {

  // const session = await auth();
  // if(!session) redirect('/sign-in');

  return (
    <div>Generate</div>
  )
}

export default Generate