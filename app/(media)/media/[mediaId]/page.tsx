import React from 'react'
import mediaList from "@/app/media.json";
import { MediaItem } from '@/components/mediaItem';


export async function generateStaticParams() {
  return mediaList.map((media) => ({
    mediaId: media.id.toString(),
  }))
}


const MediaItemPage = ({ params: { mediaId } }: { params: { mediaId: string } }) => {

  const foundedMediaWithId = mediaList.find((elem) => elem.id.toString() === mediaId)
  return (
    <MediaItem media={foundedMediaWithId} />
  )
}

export default MediaItemPage