import { Button } from "@/components/button"
import { Heading } from "@/components/heading"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div className="flex w-full max-w-[90%] md:max-w-[60%] mx-auto h-full flex-col justify-center gap-4 py-8 md:py-20">
          <div className="md:pl-8">
            <Heading text="ABOUT" />
          </div>
          <div className="w-full border-2 border-rsn-green-600 flex  items-center px-8 py-4 mt-8 md:mt-12">
            <p className="w-[80%] text-lg md:text-2xl text-rsn-green-600 md:leading-10 tracking-widest">Featuring 150 stylish and modern rooms nestled in the heart of Werribee CBD.</p>
          </div>
          <div className="flex w-[95%] flex-col gap-4 text-rsn-green-600 md:pl-8 md:text-lg mt-8">
            <p>
              Nestled in the heart of Melbourne CBD, the brand new Holiday Inn Werribee is perfectly situated within easy reach of all the best attractions and sights to see in the area.
            </p>
            <p>
              Rosana Bistro + Bar is located on the 8th floor, the ultimate place to kick back and relax after a long day of sightseeing and exploring. Dig into delicious and flavourful modern Australian cuisine while soaking up spectacular views of Werribee.
            </p>
            <p>
              This versatile meetings and events space is the ideal venue in Werribee to host meetings, conferences, cocktail parties, celebratory events.
            </p>
          </div>
          <div className="md:pl-8 mt-4 md:mt-8">
            <Button title="BOOK A TABLE" variant="tertiary" />
          </div>
        </div>

        <div className="flex w-full h-fit md:h-full bg-rsn-beige-500 mx-auto flex-col justify-center items-center gap-4 md:gap-8 py-8 md:py-20">
          <Image
            src="/images/about-image.png"
            alt="About"
            width={600}
            height={700}
            className="max-w-[80%] md:max-w-full"
          />
          <span className="text-sm md:text-2xl text-rsn-green-600">
            Open from 6:00am - 10:00pm
          </span>
        </div>
      </div>
    </section>
  )
}

export { About }