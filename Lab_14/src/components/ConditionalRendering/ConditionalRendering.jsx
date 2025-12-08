import React from 'react'
import Message from './Message'

const ConditionalRendering = () => {
  return (
    <div>
      <h2>Conditional Rendering Example</h2>

      {/* This will show */}
      <Message isDisplay={true} />

      {/* This will not show */}
      <Message isDisplay={false} />
    </div>
  )
}

export default ConditionalRendering