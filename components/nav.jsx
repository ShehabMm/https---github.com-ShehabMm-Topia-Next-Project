"use client"
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';


const Nav = () => {
  const isUserLoggedIn=true;
use

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
      
      <Image src='/assets/images/logo.svg'  width={30}  height={30} className="object-contain" />
      <p   className='logo_text' >Topia</p>
      </Link>

{/* mobile navigation */}

<div className="sm:flex hidden"  >




</div>

    </nav>
  );
}

export default Nav;
