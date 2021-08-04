import { useUser } from '@auth0/nextjs-auth0'
import DesktopLayout from 'layouts/DesktopLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from './Logo'
import LogoutButton from './LogoutButton'

function LoginButton() {
  const { user } = useUser()
  if (user) {
    return <LogoutButton />
  }
  return (
    <div className="flex space-x-8 items-center">
      <Link href="/api/auth/login">
        <button className="focus:outline-none">Login</button>
      </Link>
    </div>
  )
}

function HomeHeader() {
  const router = useRouter()
  return (
    <div className="bg-white">
      <DesktopLayout>
        <div className="flex justify-between py-5">
          <button className="text-2xl flex items-center space-x-3" onClick={() => router.push('/')}>
            <Logo />
            <span className="font-bold font-sans" style={{ letterSpacing: '-3px' }}>
              menukami
            </span>
          </button>
          <LoginButton />
        </div>
      </DesktopLayout>
    </div>
  )
}

export default HomeHeader
