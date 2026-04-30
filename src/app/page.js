import Banner from "@/components/Banner";
import MarqueeText from "@/components/MarqueeText";
import { getData } from "@/service/getData";
import Image from "next/image";
// import image from '@/assets/heroImage1.jpg'

export default async function Home() {
  const tiles = await getData();
  console.log(tiles[0]);
  return (
    <div>
      <Banner />
      <MarqueeText />
      <div className="grid grid-cols-4 gap-2">
        {tiles.map((tile) => (
          <Image
            key={tile.id}
            src={tile.image}
            alt="tiles"
            width={600}
            height={600}
          ></Image>
        ))}
      </div>
    </div>
  );
}
