import Banner from "@/components/Banner";
import MarqueeText from "@/components/MarqueeText";
import TileCard from "@/components/TileCard";
import { getData } from "@/service/getData";
import Image from "next/image";
// import image from '@/assets/heroImage1.jpg'

export default async function Home() {
  const tiles = await getData();
  return (
    <div>
      <Banner />
      <MarqueeText />
      <div className="container mx-auto my-20">
        <h1 className="text-3xl font-bold text-[var(--text-main)] text-center">
          Featured Tiles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {tiles.slice(2,6).map(tile=><TileCard key={tile.id} tile={tile}></TileCard>) }
        </div>
      </div>
    </div>
  );
}
