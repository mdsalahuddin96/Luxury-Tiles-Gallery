import { getData } from "@/service/getData";
import {ArrowLeft} from '@gravity-ui/icons';
import Image from "next/image";

export async function generateStaticParams() {
  const tiles = await fetch('https://luxury-tiles-gallery.vercel.app/data.json').then((res) => res.json())
 
  return tiles.map((tile) => ({
    id: tile.id,
  }))
}

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getData();
  const tile = data.find((tile) => tile.id === id);
  const {
    image,
    title,
    description,
    category,
    price,
    dimensions,
    material,
    inStock,
  } = tile;
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
      <div className="tile-card">
        <Image
          src={image}
          alt={title}
          height={600}
          width={600}
          className="w-full h-100"
        />
      </div>
      <div className="space-y-4">
        <div className="header flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-[var(--text-main)]">
            {title}
          </h1>
          <span className="text-3xl font-semibold text-red-400">${price}</span>
          <p className="text-[var(--text-muted)] text-lg">{description}</p>
        </div>
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl max-w-1/2 p-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-[var(--text-muted)]">Category</span>
            <span className="font-semibold capitalize">{category}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-[var(--text-muted)]">Size</span>
            <span className="font-semibold">{dimensions}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-[var(--text-muted)]">Material</span>
            <span className="font-semibold">{material}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-[var(--text-muted)]">
              Availability
            </span>
            <span
              className={`font-semibold ${inStock ? "text-green-600" : "text-red-500"}`}
            >
              {inStock ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>
        <button className="btn-primary flex items-center gap-1"><ArrowLeft/> See All This Category</button>
      </div>
    </div>
  );
};

export default TileDetailsPage;
