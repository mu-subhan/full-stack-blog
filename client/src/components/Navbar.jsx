
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import Image from './Image';
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [open,setOpen]= useState(false);

    const {getToken} = useAuth();

    useEffect(()=>{
      getToken().then((token)=>console.log(token)
      )
    },[])
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>

        {/* logo  */}
      <Link to ="/" className="flex items-center gap-4 text-2xl font-bold">
      <Image src="public/logo.png" alt="logo" w={32} h={32} />
        <span>Lamalog</span>
      </Link>

{/* mobile menu */}
<div className="md:hidden">
    <div className='cursor-pointer text-4xl'
    onClick={() => setOpen((prev) => !prev)}
    >
        {open ? (
            <img className="h-8" src="/menu.png" alt="menu" />
          ) : (
            <img className="h-8" src="/cros.png" alt="Cross" />
          )}
    </div>

{/* mobile link list */}
<div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 left-0 bg-white shadow-md transition-all ease-in-out duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
 <Link to ="/" className="py-4 text-xl">Home</Link>
          <Link to ="/" className="py-4 text-xl">Trending</Link>
          <Link to ="/" className="py-4 text-xl">Most Popular</Link>
          <Link to ="/" className="py-4 text-xl">About</Link>
          <Link to ="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
            </div>

</div>
{/* Desktop menu */}
<div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to ="/">Home</Link>
        <Link to ="/">Trending</Link>
        <Link to ="/">Most Popular</Link>
        <Link to ="/">About</Link>
        
<SignedOut>
        <Link to="/login">
  <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
    Login 👋
  </button>
</Link>
       </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>

    </div>
  )
}

export default Navbar
