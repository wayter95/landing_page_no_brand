import { Button } from "@/components/button"
import { Heading } from "@/components/heading"
import Image from "next/image"

const Drink = () => {
  return (
    <section id="eat" className="">
      <div className="grid md:grid-rows-none md:grid-cols-2 gap-y-4 md:gap-y-0">
        <div className="flex w-full max-w-[90%] md:max-w-[60%] mx-auto h-full flex-col justify-center gap-4 py-8 mt-8 md:mt-0 md:py-20">
          <Heading text="DRINK" />
          <div className="text-rsn-green-600">
            <p>
              Relax with a glass of red while gazing out over the city or unwind and socialise with a cocktail, bar snacks and an inviting ambience. From beer to spirits and spritzers to soft drinks, quench your thirst with a wide selection of local and international favourites perfect for all ages and tastes.
            </p>
          </div>

          <div className="w-[50%] mt-8">
            <Button title="DRINKS MENU" variant="tertiary" />
          </div>
        </div>

        <div className="bg-drink flex flex-col gap-4 w-full h-fit md:h-full mx-auto items-center justify-center py-8 md:py-20">
          <Image
            src="/images/drink-image.png"
            alt="About"
            width={600}
            height={700}
            className="max-w-[80%] md:max-w-full"
          />
          <span className="text-rsn-green-600 text-xl md:text-6xl">
            I’ll drink to that
          </span>
        </div>
      </div>
    </section>
  )
}

export { Drink }