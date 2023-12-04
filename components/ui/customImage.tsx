import Image from "next/image";

export default function CustomImage({ photoUrl, height = "auto", sizes = "100vw" }: { photoUrl: string; height?: string; sizes?: string }) {
  return (
    <Image
      className="object-cover"
      src={photoUrl}
      alt="image"
      sizes={sizes}
      style={{
        width: "100%",
        height: height,
      }}
      width={500}
      height={300}
    />
  );
}
