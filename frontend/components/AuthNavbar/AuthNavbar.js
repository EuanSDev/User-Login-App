'use client';

import { useDispatch, useSelector } from "react-redux";

import { LuLayoutDashboard, LuCircleUserRound, LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

import { logoutUser } from "@/utils/auth";
import Item from "./Item";
import { toggleAuthNav } from "@/store/uiSlice";

const AuthNavbar = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const navOpen = useSelector((state) => state.ui.authNav.open);

  if(!isAuth) return false;

  const toggleNav = () => {
    dispatch(toggleAuthNav());
  }

  return (
    <aside className="sm:max-w-[220px] md:max-w-[250px] lg:max-w-[302px] w-full min-h-full bg-dark border-b-4 sm:border-b-0 sm:border-r-4 border-primary relative">
      <div className="flex sm:hidden p-4 justify-between items-center">
        <h1>Menu</h1>

        <button onClick={toggleNav} className="cursor-pointer">
          <LuMenu className="text-4xl" />
        </button>
      </div>

      <nav className={`${navOpen ? 'flex' : 'hidden'} sm:flex sm:min-h-screen w-full sm:sticky top-0 left-0 flex-col py-4 sm:py-8 px-4 gap-y-4`}>
        <ul className="flex flex-col gap-4">
          <Item text="Home" href="/" Icon={LuLayoutDashboard} />
          <Item text="User" href="/user" Icon={LuCircleUserRound} />
        </ul>

        <button className="btn btn--delete btn--small mt-auto" onClick={logoutUser}>Logout</button>
      </nav>
    </aside>
  )
}
export default AuthNavbar;