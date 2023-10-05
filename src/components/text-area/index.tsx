import { TextareaHTMLAttributes } from "react";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea = ({ name, label, ...rest }: ITextAreaProps) => {
  return (
    <div className="w-full">
      <textarea
        name={name}
        id={name}
        placeholder={label}
        rows={5}
        {...rest}
        className="w-full outline-none placeholder:text-rsn-beige-300 bg-transparent p-4 text-lg border-2 border-rsn-beige-300 text-rsn-beige-300 focus:border-rsn-orange-600"
      />
    </div>
  )
}

export { TextArea }