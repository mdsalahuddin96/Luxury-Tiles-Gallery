"use client";

import { CategoryContext } from "@/provider/CategoryProvider";
import { useRouter } from "next/navigation";

import { useContext, useEffect } from "react";
const SelectCategory = () => {
  const { category,setCategory } = useContext(CategoryContext);
  const router=useRouter()
  useEffect(()=>{
    setCategory("All")
  },[router])

  return (
    <h1 className="text-3xl font-semibold text-[var(--text-main)] my-6">
      {category.charAt(0).toUpperCase() + category.slice(1)} Tiles
    </h1>
  );
};

export default SelectCategory;
