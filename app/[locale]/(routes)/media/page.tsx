import { getMedia } from "@/actions/articles";
import mediaList from "@/app/media.json";
import { MediaList } from "@/components/mediaList";
import React from "react";

const MediaPage = async () => {
  const media = await getMedia();

  return <MediaList mediaList={media} />;
};

export default MediaPage;
