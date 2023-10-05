import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { TextArea } from "@/components/text-area"

const ContactForm = () => {
  return (
    <form action="" className="flex flex-col w-full gap-4 mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input label="Your name" name="name" type="text" />
        <Input label="Your email" name="email" type="email" />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input label="Phone Number" name="phoneNumber" type="tel" />
        <Input label="Booking date" name="bookingDate" type="text" />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input label="Time" name="time" type="text" />
        <Input label="Party size" name="partySize" type="number" />
      </div>
      <TextArea label="Additional notes" name="notes" />
      <div className="max-w-[60%] md:max-w-[40%]">
        <Button title="ENQUIRE NOW" variant="secondary" />
      </div>
    </form>
  )
}

export { ContactForm }