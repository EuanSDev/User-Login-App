'use client';

import { useSelector } from "react-redux";
import { LuPartyPopper, LuCalendarDays } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

import Card from "@/components/UI/Card";
import Heading from "@/components/UI/Heading"
import Section from "@/components/UI/Section"
import CardHeader from "@/components/UI/CardHeader";
import CardItem from "@/components/UI/CardItem";

const Home = () => {
  const name = useSelector((state) => state.auth.userName);

  return (
    <Section>
      <Heading Icon={LuPartyPopper}>
        <h1>Welcome back {name}</h1>
      </Heading>

      <div className="grid lg:grid-cols-2 mt-8 gap-6 lg:gap-8">
        <div className="flex flex-col gap-6 lg:gap-8">
          <Card className={`flex flex-col gap-6`}>
            <CardHeader title="Todays Schedule" Icon={LuCalendarDays} />

            <ul className="flex flex-col gap-3 xl:gap-4">
              <CardItem tag="09:15" text="Stand Up" />
              <CardItem tag="09:30" text="Code Review" />
              <CardItem tag="10:30" text="Client Call" />
              <CardItem tag="11:30" text="Write up Technical Spec." />
              <CardItem tag="12:30" text="Bug Fix" />
              <CardItem tag="13:30" text="Project Work - Backend" />
              <CardItem tag="15:30" text="Internal Meeting" />
              <CardItem tag="16:00" text="Project Work - Frontend" />
            </ul>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
            <Card className={`lg:aspect-video flex items-center justify-center`}>
              <GoGraph className="text-[200px] text-primary" />
            </Card>

            <Card className={`lg:aspect-video flex items-center justify-center`}>
              <FaChartPie className="text-[200px] text-primary" />
            </Card>
        </div>
      </div>
    </Section>
  )
}
export default Home