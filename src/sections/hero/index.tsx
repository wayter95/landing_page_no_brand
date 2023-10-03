import { Button } from "@/components/button"
import Image from "next/image"

const Hero = () => {
  return (
    <main id="hero" className="w-screen h-[90vh] md:h-screen bg-bg-hero-mobile md:bg-bg-hero-desktop bg-no-repeat bg-right-bottom bg-auto bg-rsn-green-600">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/logo-hero.png"
            alt="rosana"
            width={320}
            height={200}
            className="pointer-events-none max-w-[60%] md:max-w-md"
          />
        </div>

        <div className="w-full max-w-[60%] md:max-w-md mt-20 flex gap-4 flex-col md:flex-row">
          <Button title="VIEW MENUS" variant="primary" />
          <Button title="BOOK A TABLE" variant="secondary" />
        </div>
      </div>
    </main>
  )
}

export { Hero }