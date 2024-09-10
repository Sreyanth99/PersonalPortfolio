import React from 'react'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <div className='relative flex-row max-w-full max-h-full mt-4'>
        <div className="flex flex-row p-9 bottom-0 left-0 items-center space-x-3 top-2 ">
        <a href='https://www.linkedin.com/in/sreyanth99/' target='_blank'><img src='./link.svg' className='size-10'/></a>
        <a href='https://github.com/sreyanth99' target='_blank'><img src='./git.svg' className='size-10'/></a>
        </div>
        <div className='absolute bottom-0 right-0 items-center py-8 px-2 justify-between'>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <a href="./SA_Resume.pdf" download>Download Resume</a>
                </span>
            </button>
        </div>
        
    </div>
  )
}

export default Footer