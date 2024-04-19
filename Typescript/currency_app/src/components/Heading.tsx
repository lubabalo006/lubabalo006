type HeadingProps = { title: string }

const Heading = ({ title }: HeadingProps) => {
    return <h1 className="text-3xl text-center text-green-500 font-bold p-4">{title}</h1>
}

export default Heading