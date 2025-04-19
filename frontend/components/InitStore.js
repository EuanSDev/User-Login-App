'use client';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialiseAuth, setLoading } from "@/store/authSlice";

const InitStore = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');
      
      if(!token && !userId) {
        dispatch(setLoading(false));
        return;
      }

      dispatch(initialiseAuth({
        token,
        userId,
        userName: userName ? userName : '',
        isAuth: true,
      }));
    } catch(err) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  return <>{children}</>
}
export default InitStore