'use client'
import { News } from '@/types'
import React from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs'
import { Title } from './ui/title'
import { Search } from './search'
import { NewsPreviewItem } from './newsPreviewItem'
import { SubscribeForm } from './forms/subscribeForm'


interface NewsListProps {
  news: News[]
}
export const NewsList: React.FC<NewsListProps> = ({ news }) => {

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Новини', url: '/blog/news' },
  ];
  return (
    <section className='relative bg-white pt-12'>
      <Container className='flex-col justify-start items-start'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className='flex justify-between items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]'>
          <div>
            <Title className='text-[48px] text-black font-oswaldBold uppercase'>Новини</Title>
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className='w-full flex justify-center flex-col text-black items-center gap-y-6 last-of-type:mb-12'>
          {news?.map((item) => (
            <NewsPreviewItem key={item.id} newsItem={item} />
          ))}
        </div>
      </Container>
      <SubscribeForm />
    </section>
  )
}
