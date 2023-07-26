import React from 'react'

const Headline = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card 1*/}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'> Satisfy your taste buds </p>
                <p className='px-2'> with <span className='font-bold'>Burger</span></p>
                <button className='border-white text-black bg-white absolute bottom-4 left-2'> Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>


{/* Card 2 */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'> Go round and round </p>
                <p className='px-2'> with <span className='font-bold'>Pizza</span></p>
                <button className='border-white text-black bg-white absolute bottom-4 left-2'> Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>


{/* Card 3 */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'> Get your best experience of food </p>
                <p className='px-2'> with <span className='font-bold'>Desert</span></p>
                <button className='border-white text-black bg-white absolute bottom-4 left-2'> Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
      
    </div>
  )
}

export default Headline
