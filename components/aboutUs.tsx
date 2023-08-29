'use client'

import React from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs';
import { Typography } from './ui/typography';
import Image from 'next/image';

export const AboutUs = () => {

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Про нас', url: '/about' },
  ];

  return (
    <section className='bg-white text-black flex flex-col justify-start pb-24'>
      <div className='w-full'>
        <Image src='/images/about.png' alt='iamge' width={1920} height={660} />
      </div>
      <Container className=' justify-start items-start flex-col pt-12'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className='mt-12 w-full'>
          <Typography className='text-[20px] tracking-wider leading-relaxed mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.
          </Typography>
          <Typography className='text-[20px] tracking-wider leading-relaxed mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam.
          </Typography>
          <Typography className='text-[20px] tracking-wider leading-relaxed mb-8'>
            Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.
          </Typography>
        </div>
      </Container>
    </section>
  )
}
