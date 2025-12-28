import React from 'react'

const WhiteButton = ({ label, onClick, className = "" }) => {
  return (
    <div>
          <button
      onClick={onClick}
      class ={`
        abolute
        left-0
        w-[80%] h-[80%]
        rounded-[80px]
        border border-[#FF698D80]
        flex items-center justify-center
        ${className}
      `}
    >
      <span
        class ="
          font-ubuntu font-bold text-[14px]
          leading-[100%] tracking-normal
        "
      >
        {label}
      </span>
    </button>
    </div>
  )
}

export default WhiteButton
