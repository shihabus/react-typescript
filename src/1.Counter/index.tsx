import { Component } from 'react'

interface CounterProps {
  defaultCount: number
}

interface CounterState {
  count: number
}

// pass type of props and state as generics
class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: props.defaultCount,
    }
  }

  // We have to explicitly mention the type of
  // arguments in the lifecycle methods
  componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
    console.log({ prevProps, prevState })
  }

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button
          onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState(({ count }) => ({ count: Math.max(count - 1, 0) }))
          }
        >
          -
        </button>
      </div>
    )
  }
}

export default Counter
