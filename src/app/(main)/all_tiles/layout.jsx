import SelectCategory from "@/components/SelectCategory";
import TilesCategory from "@/components/TilesCategory";
import CategoryProvider from "@/provider/CategoryProvider";

export default function AllTilesLayout({ children }) {
  return (
    <div className="container mx-auto mb-20">
      <CategoryProvider>
        <SelectCategory />
        <TilesCategory />
        <div>{children}</div>
      </CategoryProvider>
    </div>
  );
}
