'use client';

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserData } from "@/utils/auth";

import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Card from "@/components/Card";
import Input from "@/components/Input";

const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const result = await getUserData(token);
        const { name, email } = result.data.user;
        setName(name);
        setEmail(email);
      } catch(err) {
        console.log(err)
      }
    }
    fetchUserDetails();
  }, [])

  return (
    <main>
      <Section>
        <Heading>
          <h1>User Details</h1>
        </Heading>

        <Card className="mx-auto mt-8 max-w-none">
            <form className="mt-4 flex flex-col gap-2">
              <Input type="text" label="Name" name="name" defaultValue={name} required readOnly />
              <Input type="email" label="Email" name="email" defaultValue={email} required readOnly />
              <Input type="password" label="Password" name="password" placeholder="******" required readOnly />
            </form>
        </Card>
      </Section>
    </main>
  )
}
export default User