
import TileCard from "@/components/TileCard";
import { getData } from "@/service/getData";
import Image from "next/image";
import fileImage from "../../../public/file.svg"

const AllTilesPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  let allTiles = await getData();
  if (category) {
    const filteredTiles = allTiles.filter(
      (tile) => tile.category.toLowerCase() === category.toLowerCase(),
    );
    if (filteredTiles.length === 0) {
      return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen ">
          <Image
            src={fileImage}
            alt="file logo"
            height={100}
            width={100}
          />
          <p className="text-2xl tex-[var(--text-muted)]">No Tiles Available</p>
        </div>
      );
    }
    allTiles = filteredTiles;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto my-10">
      {allTiles.map((tile) =><TileCard key={tile.id} tile={tile}></TileCard>)}
    </div>
  );
};

export default AllTilesPage;
