import SearchTilesFiled from "@/components/SearchTiles";
import SelectCategory from "@/components/SelectCategory";
import TilesCategory from "@/components/TilesCategory";
import CategoryProvider from "@/provider/CategoryProvider";

export const metadata = {
  title: "All Tiles",
  description:
    "The Art of Excellence in surface.Tiles on a palette are just stone. Tiles installed on a wall or floor create a feeling.",
};
export default function AllTilesLayout({ children }) {
  return (
    <div className="container mx-auto mb-20">
      <SearchTilesFiled />
      <SelectCategory />
      <TilesCategory />
      <div>{children}</div>
    </div>
  );
}
