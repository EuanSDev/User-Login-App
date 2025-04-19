'use client';

import { useSelector } from "react-redux";

import Card from "@/components/Card";
import Heading from "@/components/Heading"
import Section from "@/components/Section"

const Home = () => {
  const name = useSelector((state) => state.auth.userName);

  return (
    <main>
      <Section>
        <Heading>
          <h1>Welcome back {name}</h1>
        </Heading>

        <div className="grid grid-cols-2 mt-8 gap-8">
          <Card className={`aspect-video`}></Card>
          <Card className={`aspect-video`}></Card>
          <Card className={`aspect-video`}></Card>
          <Card className={`aspect-video`}></Card>
        </div>
      </Section>
    </main>
  )
}
export default Home