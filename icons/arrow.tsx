'use client'
import React from 'react'


interface ArrowRightProps {
  width?: number;
  height?: number;
  fill?: string;
}
export const Arrow = ({ width = 14, height = 14, fill = "#000" }: ArrowRightProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path d="M4.19922 10.5L7.69922 7.00002L4.19922 3.50002L4.89922 2.10002L9.79922 7.00002L4.89922 11.9L4.19922 10.5Z" fill={fill} />
    </svg>
  )
}
