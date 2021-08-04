import React from 'react'
import Ripples from 'react-ripples'

function RippleButton({ children, ...rest }) {
  return (
    <Ripples {...rest}>
      <div>{children}</div>
    </Ripples>
  )
}

export default RippleButton
