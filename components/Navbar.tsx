import React from 'react'
import  Image from "next/image"
import Link from 'next/link'
import NavItems from './NavItems'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="navbar text-blue-600 bg-blue-200">
      <Link href="/">
      <div className="flex items-center gap-2.5 cursor-pointer ml-0 text-gray-600 font-semi-bold">
        <Image
        src="/assets/icons/rentsmart-logo.jpg"
        alt="logo"
        width={155}
        height={55}
        className='animate-out'
        />
      </div>

      </Link>
      <div className="flex items-center gap-8 text-gray-600">
        <NavItems />
        <SignedOut>
            <SignInButton>
              <button className='btn-signin'>Sign In</button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
