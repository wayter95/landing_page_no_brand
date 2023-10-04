interface IHeadingProps {
  text: string;
} 

const Heading = ({text}: IHeadingProps) => {
  return (
    <h1
    className="text-rsn-green-600 text-3xl md:text-6xl"
    >
      {text}
    </h1>
  )
}

export { Heading }