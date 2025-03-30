import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  return (
    <header style={{backgroundColor:"var(--background"}}className='container mx-auto p-4 flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 bg-white rounded'></div>
        <span className='font-semibold text-lg text-[#EACA91]'>Edugram</span>
      </div>
      <nav className='flex gap-6 text-white items-center'>
        {/* <Link href="/">
          <Image src='/logo.png' alt='logo' width={30} height={30}/>
        </Link> */}
        <Link href="/" className='font-semibold'>Home</Link>
        <Link href="/explore" className='font-semibold'>Explore</Link>
        <Link href="/explore" className='bg-[#EACA91] font-semibold text-black px-4 py-1 rounded-md'>Connect Wallet</Link>
      </nav>
    </header>
  )
}

export default Navbar