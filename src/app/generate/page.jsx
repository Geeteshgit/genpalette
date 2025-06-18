import React from 'react'
import { auth } from '@/lib/auth';
import GenerateAIPalettesContainer from '@/Components/AIPalettes/GenerateAIPalettesContainer';

export const metadata = {
  title: "Generate AI Color Palettes - GenPalette",
  description: "Describe your vision and let AI generate stunning 5-color palettes in seconds. Perfect for websites, branding, and UI/UX inspiration.",
};

const Generate = async () => {

  const session = await auth();

  return (
    <main className='flex-1 px-4 sm:px-12 lg:px-36 py-5 sm:py-10 lg:py-15'>
      <h1 className='font-anton text-center text-4xl sm:text-5xl lg:text-6xl font-bold'>Generate Color Palettes</h1>
      <GenerateAIPalettesContainer session={session} />
    </main>
  )
}

export default Generate