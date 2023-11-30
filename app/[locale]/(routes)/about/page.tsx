import { getAboutUs } from '@/actions/content';
import { AboutUs } from "@/components/aboutUs";
import { useTranslations } from "next-intl";
import React from "react";

export function useMetaData() {
  const t = useTranslations("About");
  const title = t("tab-title-about");
  return { title };
}

const AboutUsPage = async () => {

  const aboutUs = await getAboutUs()

  return <AboutUs about_description={aboutUs.about_description} />;
};

export default AboutUsPage;
