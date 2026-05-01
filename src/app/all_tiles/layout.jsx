import TilesCategory from "@/components/TilesCategory";

export default function AllTilesLayout({ children }) {
  return (
    <div className="container mx-auto mb-20">
      <h1 className="text-3xl font-semibold text-[var(--text-main)] my-6">All Tiles</h1>
      <TilesCategory />
      <div>{children}</div>
    </div>
  );
}
