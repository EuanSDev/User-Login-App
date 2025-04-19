'use client';

import { redirect } from "next/navigation"
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);

  if(isLoading) {
    return null;
  }

  if(isAuth) {
    redirect('/');
  }

  return (
    <>{children}</>
  )
}
export default Layout;