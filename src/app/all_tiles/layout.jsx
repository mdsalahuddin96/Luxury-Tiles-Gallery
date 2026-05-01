import TilesCategory from "@/components/TilesCategory";

export default function AllTilesLayout({ children }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-[var(--text-main)] my-5">All Tiles</h1>
      <TilesCategory />
      <div>{children}</div>
    </div>
  );
}
