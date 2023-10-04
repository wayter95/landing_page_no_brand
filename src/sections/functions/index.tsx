import { Button } from "@/components/button"
import { Heading } from "@/components/heading"
import Image from "next/image"

const BookFunctions = () => {
  return (
    <section id="book-functions" className="mt-20 mb-20">
      <div className="flex w-full gap-4 justify-between items-center py-12 md:py-0 md:max-w-[80%] mx-auto bg-rsn-beige-500">
        <div className="w-[60%] hidden md:block">
          <Image
            src="/images/function-image.png"
            alt="About"
            width={540}
            height={679}
            className=""
          />
        </div>

        <div className="w-full flex flex-col justify-center px-[10%]">
          <Heading text="FUNCTIONS" />
          <div className="text-rsn-green-600 flex flex-col gap-4 mt-4">
            <p>
              Whether you’re looking to host a celebratory cocktail party, enjoy a special sit-down meal with loved ones or enjoy an evening of wining, dining and networking - the Cheetham Ballroom provides 491sqm of space with access to the Moonah Terrace and pre-function space. Hire it as a complete venue or divide it into a smaller function venue - the choice is yours.
            </p>
            <p>
              Looking for something more intimate? Rosana Bistro + Bar can be hired in part or as a whole space for celebrating a special birthday, wedding anniversary or life event, providing beautiful views over Werribee and beyond.
            </p>
          </div>

          <div className="w-[60%] md:w-[50%] mt-8">
            <Button title="BOOK FUNCTION" variant="tertiary" />
          </div>
        </div>

        <div className="w-[25%] hidden md:block">
          <Image
            src="/images/function-image-2.png"
            alt="About"
            width={100}
            height={480}
            className=""
          />
        </div>
      </div>
    </section >
  )
}

export { BookFunctions }