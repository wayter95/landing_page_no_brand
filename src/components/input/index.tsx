import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const Input = ({ name, label, error, ...rest }: IInputProps) => {
  return (
    <div className="w-full">
      <input
        type="text"
        {...rest}
        name={name}
        placeholder={label}
        className="w-full placeholder:text-rsn-beige-300 bg-transparent p-4 text-lg border-2 border-rsn-beige-300 text-rsn-beige-300 outline-none focus:border-rsn-orange-600"
      />
      {error && <span>{error}</span>}
    </div>
  )
}

export { Input }