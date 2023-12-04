import { getMediaArticleId } from "@/actions/articles";
import mediaList from "@/app/media.json";
import { MediaItem } from "@/components/mediaItem";
import React from "react";

export async function generateStaticParams() {
  return mediaList.map(media => ({
    mediaId: media.id.toString(),
  }));
}

const MediaItemPage = async ({ params: { mediaId } }: { params: { mediaId: string } }) => {
  const foundedMediaWithId = await getMediaArticleId(mediaId);

  return <MediaItem article={foundedMediaWithId} />;
};

export default MediaItemPage;
