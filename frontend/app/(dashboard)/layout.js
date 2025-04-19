'use client';

import { redirect } from "next/navigation"
import { useSelector } from "react-redux";

import AuthNavbar from "@/components/AuthNavbar/AuthNavbar";

const Layout = ({ children }) => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);

  if(isLoading) {
    return null;
  }

  if(!isAuth) {
    return redirect('/login');
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <AuthNavbar />
      <main className="col-start-2 col-span-4 py-6 px-4 sm:px-8 w-full min-h-full">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
export default Layout;