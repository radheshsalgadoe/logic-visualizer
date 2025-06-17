import React from 'react'

interface TitleProps {
    size: string;
}

const Title = ( { size }: TitleProps) => {
  return (
    <>
    <div className={`
      flex
      flex-col
      flex-1 
      text-center
      text-${size}
      font-courier-prime
      `}>
    <h1 className='flex-4'>
        <span className="bg-yellow-300">L</span>ogic <span className="bg-yellow-300">V</span>isualizer<span className="animate-ping">_</span>
      </h1>
    <h2 className='flex-1 text-4xl font-courier-prime'>v_0.1</h2>
    </div>
    </>
  )
}

export default Title