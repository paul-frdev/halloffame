import React from 'react'
import mediaList from "@/app/media.json";
import { MediaList } from '@/components/mediaList';


const MediaPage = () => {
  return (
    <MediaList mediaList={mediaList} />
  )
}

export default MediaPage