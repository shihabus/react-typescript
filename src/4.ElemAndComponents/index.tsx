import React, { ComponentType, ReactElement, ReactNode } from 'react'

// when using ReactElement as type for components
// it doesn't accept string as a valid React Element
// in that case we need to double assert or wrap it with <></>
function Hello() {
  //   return <h4>Hello</h4>
  //   return ('Hello' as ReactNode) as ReactElement // Solution 1
  return <>Hello</> // Solution 2
}

const elem1: ReactElement = <Hello />
const elem2: ReactElement = React.createElement(Hello)

function RenderElement({ elem }: { elem: ReactElement }) {
  return <>{elem}</>
}

function RenderComponent({ Comp }: { Comp: ComponentType }) {
  return (
    <>
      <Comp />
    </>
  )
}

export default function App() {
  return (
    <>
      <RenderElement elem={<Hello />} />
      <br />
      <RenderComponent Comp={Hello} />
    </>
  )
}
