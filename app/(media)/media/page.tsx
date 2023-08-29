import mediaList from "@/app/media.json";
import { MediaList } from "@/components/mediaList";
import React from "react";

const MediaPage = () => {
  return <MediaList mediaList={mediaList} />;
};

export default MediaPage;
