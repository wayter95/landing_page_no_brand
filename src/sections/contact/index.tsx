import { ContactForm } from "./form"

const Contact = () => {
  return (
    <section id="contact" className="bg-rsn-green-600 mt-20 bg-bg-contact-mobile md:bg-bg-contact-desktop bg-no-repeat bg-left-top-20 md:bg-left-bottom bg-blend-multiply">
      <div className="flex flex-col md:flex-row w-full gap-4 max-w-[80%] mx-auto py-20">
        <div className="flex w-full flex-col  justify-center gap-4 md:px-[5%] text-rsn-beige-300">
          <h1 className="text-6xl md:text-8xl font-normal -tracking-widest">Book a Table</h1>
          <h3 className="text-4xl md:text-5xl leading-[3rem] md:leading-[4rem] tracking-widest font-normal uppercase mt-8">Ready to make a date with us?</h3>
          <p className="text-lg font-normal md:pr-12">Simply fill in the online form below to make a booking and we’ll get back to you with a confirmation shortly.</p>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export { Contact }