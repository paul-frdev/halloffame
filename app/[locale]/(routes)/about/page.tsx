import { AboutUs } from "@/components/aboutUs";
import { useTranslations } from "next-intl";
import React from "react";

export function useMetaData() {
  const t = useTranslations("About");
  const title = t("tab-title-about");
  return { title };
}

const AboutUsPage = () => {
  const { title } = useMetaData();

  return <AboutUs />;
};

export default AboutUsPage;
