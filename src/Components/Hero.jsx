import React from 'react'
// import bgImg from '../assets/cyber-bg.png'

function Hero() {
  return (
    <div name='home' className='w-full h-screen flex flex-col justify-between sm:bg-zinc-200 bg-blue-100'>
        <div className='my-32 grid text-center max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center w-full px-2 py-8'>
                <h1 className='py-3 font-bold sm:text-slate-600 text-yellow-800 text-center'>The New Way<br/> for acquing art</h1>
                <p className='text-slate-600 text-center'>We unite art and its next owner</p>
                <button className='py-3 px-8  mt-12 mb-16 sm:px-5'>Explore</button>
            </div>       
        </div>
    </div>
    )
}

export default Hero

