"use client"
import { sampleDreamcards } from '@/constants'
import React, { useMemo } from 'react'
import DreamboardCard from './dreamboard-card'
import Paperfold from './paperfold'

// Card size configuration
const CARD_SIZES = {
  yellow: 'h-[215px] w-[368px]',
  green: 'h-[500px] w-[368px]',
  blue: 'h-[400px] w-[368px]' // Slightly shorter than green for variety
}

// Helper function to create a masonry layout
export const createMasonryLayout = (items: any[], columns: number) => {
  const columnHeights = new Array(columns).fill(0)
  const columnItems = new Array(columns).fill(0).map(() => [] as any[])
  
  items.forEach((item) => {
    // Get the height based on card type
    const height = item.card === 'yellow' ? 215 : item.card === 'blue' ? 400 : 500
    
    // Find the shortest column
    const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))
    
    // Add item to the shortest column
    columnItems[shortestColumnIndex].push(item)
    
    // Update column height
    columnHeights[shortestColumnIndex] += height + 24 // 24px is the gap (gap-6 = 1.5rem = 24px)
  })
  
  return columnItems
}

const DreamboardWall = () => {
  // Create a shuffled copy of the cards for a more organic look
  const shuffledCards = useMemo(() => {
    return [...sampleDreamcards].sort(() => Math.random() - 0.5)
  }, [])
  
  // Create masonry layout with 3 columns
  const columns = 3
  const masonryLayout = useMemo(
    () => createMasonryLayout(shuffledCards, columns),
    [shuffledCards]
  )

  return (
    <div className='bg-gradient-to-b rounded-4xl from-[#F3EEFC] to-[#FFFFFF00] w-full min-h-[160vh]  h-full'>
      <div className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-9 max-w-7xl min-h-[160vh] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[0]'>
          {masonryLayout.map((column, colIndex) => (
            <div key={`column-${colIndex}`} className='flex flex-col gap-6'>
              {column.map((card) => (
                <div 
                  key={card.id} 
                  className={`${CARD_SIZES[card.card as keyof typeof CARD_SIZES]} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                >
                  <DreamboardCard {...card} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Paperfold />
    </div>
  )
}

export default DreamboardWall