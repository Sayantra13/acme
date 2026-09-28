
import { Link } from "react-router-dom";
import {useState} from 'react'


export default function Header() {
  const [ active, setactive ] = useState(false);

  const list=["NOODLES","STICKS","PUFFS","PROTEIN BARS","AATA","PERFECT DATES","BUNDLE DEALS"]

  return (
      <header className="w-full min-h-[var(--header-height)] sticky top-0 z-50">

      <h4 className="flex bg-[#F99C01] justify-center text-[8px] md:text-[16px] md:py-1 md:px-4 text-white">
        20% OFF on ₹250+ (POSHAN20) | 30% OFF on ₹600+ (POSHAN30)
      </h4>
      <nav className="flex relative p-4 md:p-10 items-center justify-between bg-[var(--header-color)]">
        <div className="flex items-center mx-4  gap-10">
          <button className="hidden lg:block text-2xl text-white !font-bold" onClick={() => setactive(!active)}>Shop</button>
          <Link to='/' className="hidden lg:block text-2xl text-white !font-bold cursor-pointer">About Us</Link>
          <button  className="lg:hidden block text-2xl text-white !font-bold cursor-pointer"  onClick={() => setactive(!active)} >≡</button>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <Link to='/' className="hidden md:block !font-bold cursor-pointer"><img className="w-[15px] md:w-[30px] " src="/acme/header/Search.png" alt="Search" /></Link>
          <Link to='/' className="block !font-bold cursor-pointer"><img className="w-[15px] md:w-[30px] " src="/acme/header/profile.png" alt="User" /></Link>
          <Link to='/' className="hidden md:block !font-bold cursor-pointer"><img className="w-[15px] md:w-[30px] " src="/acme/header/like.png" alt="Wishlist" /></Link>
          <Link to='/' className="block !font-bold cursor-pointer"><img className="w-[15px] md:w-[30px] " src="/acme/header/buy.png" alt="Cart" /></Link>
        </div>

        <div className="absolute left-1/2 top-3 -translate-x-1/2">
          <img className="w-[100px] h-[67px] md:w-[179px] md:h-[124px]" src="/acme/header/logo.png" alt="logo" />
        </div>
      </nav>  

    { active && (
<div className="flex absolute w-full z-[-10] p-8 items-center bg-[#A80443] justify-between gap-15">
        <div className="grid lg:flex items-center lg:justify-between gap-5 lg:gap-15 w-full">
          {
            list.map((item, index) => (
              <Link key={index} to='/' className="lg:text-2xl lg:w-[calc(100%/7)] text-white !font-bold cursor-pointer">{item}</Link>
            ))
          }
        </div>
        </div>
      )}
      </header>
  )
}

