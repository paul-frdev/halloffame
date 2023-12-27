'use client'

import React from 'react'
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

type CheckboxProps = {
  onChange: (event: any) => void;
  children: React.ReactNode;
  loading: boolean
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({ onChange, children, loading = false }) => {
  return (
    <div className=' w-full max-w-[400px] cursor-pointer'>
      <label className='flex justify-start items-center gap-x-1 cursor-pointer'>
        <Checkbox
          defaultChecked={false}
          onChange={onChange}
          disabled={loading}
        />
         &nbsp; {children}
      </label>
      &nbsp;&nbsp;
    </div>
  )
}
