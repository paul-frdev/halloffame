import React from 'react'

export const Facebook: React.FC = ({ fill = '#6f6f6f' }: { fill?: string }) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
      <g opacity="1" clipPath="url(#clip0_4_82)">
        <path className='' d="M2.75 6H0.5V9H2.75V18H6.5V9H9.2315L9.5 6H6.5V4.74975C6.5 4.0335 6.644 3.75 7.33625 3.75H9.5V0H6.644C3.947 0 2.75 1.18725 2.75 3.46125V6Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_4_82">
          <rect width="10" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
