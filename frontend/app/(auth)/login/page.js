'use client';

import { useState } from "react";
import { useDispatch } from "react-redux";

import Link from "next/link"
import Input from "@/components/UI/Input"
import Card from "@/components/UI/Card"

import { loginUser } from "@/utils/auth";
import { login } from "@/store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const email = formData.get('email');
      const password = formData.get('password');

      const data = await loginUser(email, password);

      if(!data.success) {
        throw new Error(data.error);
      }

      const { token, userId, userName } = data.data;

      dispatch(login({ token, userId, userName }));

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', userName);

      window.location.href = '/user';
    } catch(err) {
      console.log(err);
      setErrors([
        'Error logging in, please check your details and try again.'
      ]);
    }
  }

  return (
    <main>
      <section className="py-8">
        <div className="container mx-auto px-4">

          <Card className="mx-auto">
            <div className="md:max-w-xl mx-auto">
              <div className="flex flex-col justify-center items-center">
                <h1 className="mb-4">Log In</h1>

                <p className="text-center">Don&apos;t have an account? <Link href="/register" className="cursor-pointer text-primary underline">Register.</Link></p>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <Input type="email" label="Email" name="email" required placeholder="john.doe@example.com" />
                <Input type="password" label="Password" name="password" required placeholder="******" />

                {errors && errors.map((err, index) => (
                  <p key={index} className="text-delete">{err}</p>
                ))}

                <button type="submit" className="btn btn--primary mt-4 ml-auto">Log In</button>
              </form>
            </div>
          </Card>

        </div>
      </section>
    </main>
  )
}
export default Login