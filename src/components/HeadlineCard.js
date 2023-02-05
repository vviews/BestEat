import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 :grid-cols-4'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'> Sun's Out , BOGO's Out</p>
                <p className='px-4'> Through 8/26</p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 font-bold'>Order now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        </div>
         {/* Card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'> Sun's Out , BOGO's Out</p>
                <p className='px-4'> Through 8/26</p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 font-bold'>Order now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        </div>
         {/* Card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'> Sun's Out , BOGO's Out</p>
                <p className='px-4'> Through 8/26</p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 font-bold'>Order now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'> Sun's Out , BOGO's Out</p>
                <p className='px-4'> Through 8/26</p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 font-bold'>Order now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        </div>
    </div>
  )
}

export default HeadlineCard