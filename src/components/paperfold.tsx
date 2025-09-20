import React from 'react'

const Paperfold = () => {
  return (
    <div className='container'>
        <h1>Precise Paper Fold Effect</h1>
        <p className="description">This SVG recreates the folded paper effect with mathematically precise corners and accurate color representation. The fold on the right uses gradients to simulate realistic lighting.</p>
        
        <div className="svg-container">
            <svg width="300" height="300" viewBox="0 0 300 300">
                <defs>
                    <linearGradient id="foldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#f9f9f9" />
                        <stop offset="90%" stop-color="#f0f0f0" />
                        <stop offset="100%" stop-color="#e6e6e6" />
                    </linearGradient>
                    
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                        <feOffset dx="4" dy="4" result="offsetblur"/>
                        <feFlood flood-color="rgba(0,0,0,0.2)"/>
                        <feComposite in2="offsetblur" operator="in"/>
                        <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                <g filter="url(#shadow)">
                    <path d="M250,50 L250,250 L200,250 L230,220 L230,80 L200,50 Z" fill="url(#foldGradient)"/>
                    
                    <path d="M50,50 L230,50 L230,220 L200,250 L50,250 Z" fill="#f9f9f9"/>
                    
                    <text x="150" y="165" font-family="Arial" font-size="60" text-anchor="middle" fill="#333">1/2</text>
                    
                    <path d="M230,50 L200,80 L200,250" fill="none" stroke="#e0e0e0" stroke-width="1"/>
                    
                    <path d="M250,50 L250,250" fill="none" stroke="#f5f5f5" stroke-width="2"/>
                </g>
                
                <circle cx="50" cy="50" r="3" fill="#ccc"/>
                <circle cx="50" cy="250" r="3" fill="#ccc"/>
                <circle cx="200" cy="250" r="3" fill="#ccc"/>
                <circle cx="230" cy="220" r="3" fill="#ccc"/>
                <circle cx="230" cy="80" r="3" fill="#ccc"/>
                <circle cx="200" cy="50" r="3" fill="#ccc"/>
            </svg>
        </div>
    </div>
  )
}

export default Paperfold