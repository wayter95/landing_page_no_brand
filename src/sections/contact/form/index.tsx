import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { TextArea } from "@/components/text-area"

const ContactForm = () => {
  return (
    <form  className="flex flex-col w-full gap-4 mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input label="Your name" name="name" type="text" required />
        <Input label="Your email" name="email" type="email" required/>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input label="Phone Number" name="phoneNumber" type="tel" required />
        <Input label="Booking date" name="bookingDate" type="text" required/>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input label="Time" name="time" type="text" required/>
        <Input label="Party size" name="partySize" type="number" required/>
      </div>
      <TextArea label="Additional notes" name="notes" />
      <div className="max-w-[60%] md:max-w-[40%]">
        <Button title="ENQUIRE NOW" variant="secondary" type="submit" />
      </div>
    </form>
  )
}

export { ContactForm }