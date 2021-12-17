import { Dispatch, SetStateAction, useState } from 'react'

function Increment() {
  // annotate useState
  // by default the types are inferred
  const [value, setValue] = useState<null | number>(null)

  return (
    <div>
      <h1>Value: {value || 0}</h1>
      <button onClick={() => setValue((value || 0) + 1)}>+</button>
    </div>
  )
}

export default Increment

// incase we receive value and setState as props
// we annotate setter function using the type used by React
// this works for updater form and normal form of state setter function
function ProppedIncrement({
  value,
  setValue,
}: {
  value: number | null
  setValue: Dispatch<SetStateAction<number | null>>
}) {
  return (
    <div>
      <h1>Value: {value || 0}</h1>
      <button onClick={() => setValue((value || 0) + 1)}>+</button>
      <button onClick={() => setValue((value) => (value || 0) + 2)}>++</button>
    </div>
  )
}

export function ProppedApp() {
  const [value, setValue] = useState<null | number>(null)

  return <ProppedIncrement value={value} setValue={setValue} />
}
