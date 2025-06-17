import React from 'react'

interface TitleProps {
    size: string;
}

const Title = ( { size }: TitleProps) => {
  return (
    <h1 className={`
      flex-1 
      text-center
      text-${size}
      font-courier-prime
      `}>
        <span className="bg-yellow-300">L</span>ogic <span className="bg-yellow-300">V</span>isualizer<span className="animate-pulse">_</span>
      </h1>
  )
}

export default Title