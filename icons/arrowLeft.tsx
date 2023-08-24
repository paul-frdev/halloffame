'use client'
import React from 'react'


interface ArrowLeftProps {
  width?: number;
  height?: number;
  fill?: string;
}
export const ArrowLeft = ({ width = 14, height = 14, fill = "#000" }: ArrowLeftProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
      <g opacity="0.4">
        <path d="M9.80078 3.49998L6.30078 6.99998L9.80078 10.5L9.10078 11.9L4.20078 6.99998L9.10078 2.09998L9.80078 3.49998Z" fill={fill} />
      </g>
    </svg>
  )
}
