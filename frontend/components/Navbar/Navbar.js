'use client';

import Link from "next/link"

import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if(isAuth) return false;

  return (
    <header className="min-h-[64px] flex items-center justify-center bg-dark border-b-4 border-primary">
      <nav>
        <ul className="flex gap-4">
          <li className="navbar__item"><Link href="/login">Log in</Link></li>
          <li className="navbar__item"><Link href="/register">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar;