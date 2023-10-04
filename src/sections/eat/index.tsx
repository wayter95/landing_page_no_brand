import { Button } from "@/components/button"
import { Heading } from "@/components/heading"
import Image from "next/image"

const Eat = () => {
  return (
    <section id="eat" className="mt-20">
      <div className="grid md:grid-rows-none md:grid-cols-2 gap-y-4 md:gap-y-0">
        <div className="bg-mind flex w-full h-fit md:h-full mx-auto items-center justify-center py-8 md:py-20 order-2 md:order-1">
          <div className="w-[10%] md:w-[5%] flex justify-center items-center">
            <span className="inline-block transform -rotate-90 whitespace-nowrap text-xl md:text-6xl text-rsn-green-600">Stay & chat</span>
          </div>
          <div className="w-[80%] flex justify-center items-center">
            <Image
              src="/images/eat-image.png"
              alt="About"
              width={600}
              height={700}
              className="max-w-full"
            />
          </div>
        </div>


        <div className="flex w-full max-w-[90%] md:max-w-[60%] mx-auto h-full flex-col justify-center gap-4 py-8 md:py-20 order-1 md:order-2">
          <Heading text="EAT" />
          <div className="flex flex-col gap-4 text-rsn-green-600">
            <p>
              Open from 6:00 AM to 10:00 PM daily, Rosana Bistro + Bar is a feast for the senses serving amazing food with beautiful views over Werribee.
            </p>
            <p>
              Enjoy a casual and relaxed atmosphere with the whole family - kids eat free when staying at the hotel & dining with adults - or fuel up on a nutritious meal before hitting your next meeting. Feel like breakfast in bed or having lunch in your room? Room service is available from 12:00 PM to 12:00 AM daily, serving up the same mouthwatering meals in the comfort of your room or suite.
            </p>
          </div>

          <div className="flex w-[70%] flex-col gap-4 mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <Button title="ALL DAY MENU" variant="tertiary" />
              <Button title="DINNER MENU" variant="tertiary" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Button title="BAR MENU" variant="tertiary" />
              <Button title="KIDS MENU" variant="tertiary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Eat }