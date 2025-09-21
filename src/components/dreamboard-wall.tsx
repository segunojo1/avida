"use client"
import React, { useMemo } from 'react'
import DreamboardCard from './dreamboard-card'
import { useAppStore } from '@/store/app.store'
import type { DreamCard } from '@/constants'

// Card size configuration
const CARD_SIZES = {
  yellow: 'h-[215px] w-[368px]',
  green: 'h-[500px] w-[368px]',
  blue: 'h-[400px] w-[368px]'
}

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

const DreamboardWall = ({ cards }: { cards: DreamCard[] }) => {
  const { searchQuery, categoryFilter } = useAppStore();

  const filteredCards = useMemo(() => {
    return cards.filter(card => {

      if (categoryFilter && card.category !== categoryFilter) {
        return false;
      }
      
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        return (
          card.message.toLowerCase().includes(query) || 
          card.author.toLowerCase().includes(query) ||
          card.category?.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
  }, [cards, searchQuery, categoryFilter]);

  // Create a shuffled copy of the filtered cards for a more organic look
  const shuffledCards = useMemo(() => {
    return [...filteredCards].sort(() => Math.random() - 0.5);
  }, [filteredCards]);
  
  const columns = 3;
  const masonryLayout = useMemo(
    () => createMasonryLayout(shuffledCards, columns),
    [shuffledCards]
  ); 

  return (
    <div className='bg-gradient-to-b rounded-4xl from-[#F3EEFC] to-[#FFFFFF00] w-full min-h-[160vh] h-full'>
      <div className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-9 max-w-7xl min-h-[160vh] mx-auto'>
        {filteredCards.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full min-h-[50vh] text-center'>
            <h3 className='text-xl font-medium text-gray-600'>No dreams found</h3>
            <p className='text-gray-500 mt-2'>Try adjusting your search or check back later</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default DreamboardWall