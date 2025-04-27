import { MusicCardProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const MusicCard = ({item,idx}:{item: MusicCardProps, idx:number}) => {
  return (
    <div>
        <div className={`relative w-[145px] cursor-pointer overflow-hidden bg-[#252525] rounded-lg shadow-sm  ${[4, 6].includes(idx) ? "shadow-[#F03F98]" : "shadow-[#181818]"}`}>
            <div className='relative w-full h-[145px]'>
                <Image
                src={item.img}
                alt='musicImg'
                width={1000}
                height={1000}
                className='object-cover w-full h-full'
                />
            </div>
            <div className='py-2.5 px-1.5'>
                <h4 className='text-xs text-[#FAFAFA]'>{item.title}</h4>
                <p className='text-[10px] text-[#8C9092] mt-1'>{item.des}</p>

                <div className='flex items-center justify-between pt-3 text-[#FAFAFA]'>
                    <p className='text-xs'>${item.price}</p>
                    <button className='text-[10px] py-1.5 px-4 bg-[#151515] rounded-[6px]'>Buy</button>
                </div>
            </div>
            <div className='absolute top-1 right-1 p-1.5 bg-[#25252580] rounded-full cursor-pointer'>
            <FaRegHeart color='white' size={16}/>
            </div>
        </div>
    </div>
  )
}

export default MusicCard