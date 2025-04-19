'use client';

import Link from "next/link"

import { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "@/components/UI/Input"
import Card from "@/components/UI/Card"

import { login } from "@/store/authSlice";
import { signupUser } from "@/utils/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');

      const data = await signupUser(name, email, password, confirmPassword);

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
        'Error registering, please check your details and try again.',
        'Ensure your email address is valid, your password is at least 5 characters and that they both match.',
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
                <h1 className="mb-4">Register</h1>

                <p className="text-center">Already have an account? <Link href="/login" className="cursor-pointer text-primary underline">Log in.</Link></p>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <Input type="text" label="Name" name="name" required placeholder="John Doe" />
                <Input type="email" label="Email" name="email" required placeholder="john.doe@example.com" />
                <Input type="password" label="Password" name="password" required placeholder="******" />
                <Input type="password" label="Confirm Password" name="confirmPassword" required placeholder="******" autoComplete="current-password" />

                {errors && errors.map((err, index) => (
                  <p key={index} className="text-delete">{err}</p>
                ))}

                <button type="submit" className="btn btn--primary mt-4 ml-auto">Register</button>
              </form>
            </div>
          </Card>

        </div>
      </section>
    </main>
  )
}
export default Signup