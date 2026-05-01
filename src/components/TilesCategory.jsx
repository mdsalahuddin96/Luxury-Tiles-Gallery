
import { getCategory } from "@/service/getCategory";
import CategoryButton from "./CategoryButton";

const TilesCategory = async () => {
  const categories = await getCategory();
  return (
    <CategoryButton categories={categories}></CategoryButton>
    
    // <div className="flex gap-4 items-center ">
    //   {categories.map((category) => (
    //     <CategoryButton
    //       key={category.id}
    //       category={category}
    //     ></CategoryButton>
    //   ))}
    // </div>
  );
};

export default TilesCategory;
