'use client';

import Link from "next/link"

import { useSelector } from "react-redux";

import { logoutUser } from "@/utils/auth";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <header className="min-h-[64px] flex items-center justify-center bg-dark border-b-4 border-primary">
      <nav>
        <ul className="flex gap-4">
          {!isAuth && (
            <>
              <li className="navbar__item"><Link href="/login">Log in</Link></li>
              <li className="navbar__item"><Link href="/register">Sign up</Link></li>
            </>
          )}

          {isAuth && (
            <>
              <li className="navbar__item"><Link href="/">Home</Link></li>
              <li className="navbar__item"><Link href="/user">User</Link></li>
              <li className="navbar__item"><button onClick={logoutUser}>Logout</button></li>
            </>
          )}

        </ul>
      </nav>
    </header>
  )
}
export default Navbar;