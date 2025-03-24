import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  return (
    <header style={{backgroundColor:"var(--background"}}className='px-5 py-3 font-work-sans'>
      <nav className='flex justify-between items-center'>
        {/* <Link href="/">
          <Image src='/logo.png' alt='logo' width={30} height={30}/>
        </Link> */}
        <div className='text-xl font-bold'>Edugram</div>
        <div className='space-x-4'>
          <a href="/" className='text-secondary'>Home</a>

        </div>
      </nav>
    </header>
  )
}

export default Navbar