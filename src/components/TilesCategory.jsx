
import { getCategory } from "@/service/getCategory";
import CategoryButton from "./CategoryButton";

const TilesCategory = async () => {
  const categories = await getCategory();
  return (
    <CategoryButton categories={categories}></CategoryButton>
  );
};

export default TilesCategory;
