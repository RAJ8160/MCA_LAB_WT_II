import React from 'react'

const Message = (props) => {
  return (
    <>
      {props.isDisplay && (
        <div style={{ padding: "10px", background: "lightgreen" }}>
          This message is visible because isDisplay is TRUE
        </div>
      )}
    </>
  );
}

export default Message