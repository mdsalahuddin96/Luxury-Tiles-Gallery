'use client'
import React, { createContext, useState } from 'react';

export const CategoryContext=createContext()
const CategoryProvider = ({children}) => {
    const [category,setCategory]=useState("All");
    const data={
        category,
        setCategory
    }
    return (
        <CategoryContext.Provider value={data}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;