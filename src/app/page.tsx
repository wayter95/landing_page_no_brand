import { About } from "@/sections/about";
import { Drink } from "@/sections/drinks";
import { Eat } from "@/sections/eat";
import { BookFunctions } from "@/sections/functions";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Eat />
      <Drink />
      <BookFunctions />
    </>
  )
}
