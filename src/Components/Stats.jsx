import React from 'react'
import {
    CloudArrowUpIcon,
    BuildingStorefrontIcon,
    PaperAirplaneIcon,
    ServerStackIcon
} from '@heroicons/react/24/solid'

function Stats() {
  return (
    <div className='absolute flex flex-col py-8 md:min-w-[768px] bottom-[-15%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
        <p className='mb-4 text-xl text-zinc-800'>The Best Curator in Town</p>
        <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 cursor-pointer text-slate-500'><CloudArrowUpIcon className='h-6 text-yellow-600 px-2' />142 Sold this year</p>
            <p className='flex px-4 py-2 cursor-pointer text-slate-500'><BuildingStorefrontIcon className='h-6 text-yellow-600 px-2' />645 Bought</p>
            <p className='flex px-4 py-2 cursor-pointer text-slate-500'><PaperAirplaneIcon className='h-6 text-yellow-600 px-2' />13 Handcrafted</p>
            <p className='flex px-4 py-2 cursor-pointer text-slate-500'><ServerStackIcon className='h-6 text-yellow-600 px-2' />Antique</p>
        </div>                            
    </div>
    )
}

export default Stats