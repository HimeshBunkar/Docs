import React from 'react'

function Background() {
  return (
    <div>
      <>
      <div className='fixed w-full z-[2] h-screen'>
        <div className='absolute w-full py-10 top-[5%] flex justify-center text-xl text-zinc-600 font-semibold'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>DOCS</h1>
      </div>
      
      </>
    </div>
  )
}

export default Background
