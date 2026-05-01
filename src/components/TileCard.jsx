import Image from "next/image";
import Link from "next/link";
import React from "react";
import tileImage from '../../public/images/tiles/tile_002.png'
const TileCard = ({ tile }) => {
  return (
    <div className="tile-card flex flex-col gap-4 items-start">
      <div className="relative w-full aspect-square ">
        <Image
          src={tile?.image||tileImage}
          alt={tile.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-xl text-[var(--text-main)] font-semibold">
        {tile.title}
      </p>
     <p className="text-[var(--text-muted)]">CATEGORY: {tile.category.toUpperCase()}</p>
      <Link href={`/tilesDetails/${tile.id}`} className="btn-secondary">
        Vide Details
      </Link>
    </div>
  );
};

export default TileCard;
