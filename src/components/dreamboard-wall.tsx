import { sampleDreamcards } from '@/constants'
import React from 'react'
import DreamboardCard from './dreamboard-card'

const DreamboardWall = () => {
  return (
    <div className='bg-gradient-to-b rounded-4xl px-[13px] from-[#F3EEFC] to-[#FFFFFF00]'>
        <div className='py-[93px] px-[113px] grid grid-cols-3'>
            {sampleDreamcards.map(card => (
                <DreamboardCard key={card.id} {...card} />
            ))}
        </div>
    </div>
  )
}

export default DreamboardWall