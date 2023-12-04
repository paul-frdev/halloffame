import { getMainSlides } from "@/actions/slides";
import { MainClient } from "@/components/mainClient";

export default async function Home() {
  const mainSlides = await getMainSlides();

  return <MainClient slides={mainSlides} />;
}
