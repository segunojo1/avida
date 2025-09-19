"use client"
import { sampleDreamcards } from '@/constants'
import React from 'react'
import DreamboardCard from './dreamboard-card'

const DreamboardWall = () => {
  // Group cards into columns for better masonry effect
  const columns = 3;
  const columnWrapper: { [key: string]: any[] } = {};
  
  // Create columns
  Array(columns).fill(0).forEach((_, i) => {
    columnWrapper[`column${i}`] = [];
  });
  
  // Distribute cards into columns
  sampleDreamcards.forEach((card, i) => {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(card);
  });

  return (
    <div className='bg-gradient-to-b rounded-4xl px-[13px] from-[#F3EEFC] to-[#FFFFFF00]'>
      <div className='py-[93px] px-[113px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Object.keys(columnWrapper).map((columnId, index) => (
            <div key={columnId} className='flex flex-col gap-6'>
              {columnWrapper[columnId].map((card) => (
                <div key={card.id} className='break-inside-avoid'>
                  <DreamboardCard {...card} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DreamboardWall