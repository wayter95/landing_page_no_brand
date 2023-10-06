import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ title, variant, ...rest }: IButtonProps) => {
  return (
    <>
      {
        variant === 'primary' &&
        <button
          className="w-full bg-rsn-beige-300 text-rsn-green-600 text-base font-bold p-4 hover:opacity-80 transition duration-200"
          {...rest}
        >
          {title}
        </button>
      }
      {
        variant === 'secondary' &&
        <button
          className="w-full bg-rsn-orange-600 text-rsn-beige-300 text-base font-bold p-4 hover:opacity-80 transition duration-200"
          {...rest}
        >
          {title}
        </button>
      }
      {
        variant === 'tertiary' &&
        <button
          className="w-full bg-transparent border-2 border-rsn-green-600 text-rsn-green-600 text-base font-bold p-4 hover:opacity-80 hover:bg-rsn-green-600 hover:text-rsn-beige-300 transition duration-200"
          {...rest}
        >
          {title}
        </button>
      }
    </>
  )
}
export { Button }