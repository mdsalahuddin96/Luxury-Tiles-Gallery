"use client";

import { CategoryContext } from "@/provider/CategoryProvider";

import { useContext } from "react";
const SelectCategory = () => {
  const { category } = useContext(CategoryContext);

  return (
    <h1 className="text-3xl font-semibold text-[var(--text-main)] my-6">
      {category.charAt(0).toUpperCase() + category.slice(1)} Tiles
    </h1>
  );
};

export default SelectCategory;
