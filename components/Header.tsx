import Link from 'next/link';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import {BsBellFill} from 'react-icons/bs'
import { useState, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

function Header() {

    const [isScroll, setIsScroll] = useState(false)
    const {logout} = useAuth()

    useEffect(() => {
      const handlescroll = () => {
        if (window.scrollY > 0) {
          setIsScroll(true)
        } else {
          setIsScroll(false)
        }
      }

      window.addEventListener('scroll', handlescroll)
      return () => {
        window.removeEventListener('scroll', handlescroll)
      }
    },[])


  return (
    <header className={`${isScroll && "bg-[#141414]"}`}>
    <div className="flex  items-center space-x-2 md:space-x-10">
    <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Show</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
    </div>
    <div className='flex items-center space-x-4 text-sm font-light'>
        <AiOutlineSearch className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline'>Kids</p>
        <BsBellFill className='h-5 w-5'/>
        {/* <Link href="/account"> */}
        <img
        onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
    </div>
    </header>
  )
}

export default Header