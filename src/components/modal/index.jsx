import React from 'react'
import "./modal.scss"

const Modal = ({ children, close }) => {
  return (
    <div onClick={() => close()} className="modal" >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}

export default Modal