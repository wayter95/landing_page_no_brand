import { About } from "@/sections/about";
import { Drink } from "@/sections/drinks";
import { Eat } from "@/sections/eat";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Eat />
      <Drink />
    </>
  )
}
