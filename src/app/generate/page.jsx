import React from 'react'
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import Link from 'next/link';


export const metadata = {
  title: "Generate AI Color Palettes - GenPalette",
  description: "Describe your vision and let AI generate stunning 5-color palettes in seconds. Perfect for websites, branding, and UI/UX inspiration.",
};

const Generate = async () => {

  // const session = await auth();
  // if(!session) redirect('/sign-in');

  return (
    <main className='flex-1'>
      Generate
      <Link href='/palette'>Palette</Link>
    </main>
  )
}

export default Generate