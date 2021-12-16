import React, { ReactElement } from 'react'

const Hello = () => (
  <div>
    <>Hello</>
  </div>
)

const HelloElement: ReactElement = <Hello />

const otherElement: ReactElement = React.createElement(Hello)

export default Hello
