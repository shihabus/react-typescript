import { FC, ReactElement } from 'react'

// 1.annotate return type
function HelloWorld({ message }: { message: string }): ReactElement {
  return <h1>{message}</h1>
}

// 2.FC
interface HelloWorldProps {
  message: string
}
const HelloWorld2: FC<HelloWorldProps> = ({ children, message }) => {
  return (
    <>
      <h2>{message}</h2>
      {children}
    </>
  )
}

export default function App() {
  return (
    <>
      <HelloWorld message="Hello World! I'm Shihab" />
      <HelloWorld2 message="Hello World! I'm Mr.SuS">
        <h4>We are in Prussia</h4>
      </HelloWorld2>
    </>
  )
}
