import React from 'react'
import newsList from "@/app/news.json"
import { NewsList } from '@/components/newsList'


const NewsPage = () => {
  return (
    <NewsList news={newsList} />
  )
}

export default NewsPage;
