'use client';

import { redirect } from "next/navigation"
import { useSelector } from "react-redux";

import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }) => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);

  if(isLoading) {
    return null;
  }

  if(isAuth) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default Layout;