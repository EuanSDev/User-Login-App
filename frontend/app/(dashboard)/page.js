'use client';

import { useSelector } from "react-redux";
import { LuPartyPopper } from "react-icons/lu";

import Card from "@/components/UI/Card";
import Heading from "@/components/UI/Heading"
import Section from "@/components/UI/Section"

const Home = () => {
  const name = useSelector((state) => state.auth.userName);

  return (
    <Section>
      <Heading Icon={LuPartyPopper}>
        <h1>Welcome back {name}</h1>
      </Heading>

      <div className="grid lg:grid-cols-2 mt-8 gap-6 lg:gap-8">
        <Card className={`aspect-video row-span-2 col-start-1 h-full`}></Card>
        <Card className={`aspect-video`}></Card>
        <Card className={`aspect-video`}></Card>
      </div>
    </Section>
  )
}
export default Home