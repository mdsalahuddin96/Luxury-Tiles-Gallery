

export const getCategory = async () => {
    const category=await fetch('https://luxury-tiles-gallery.vercel.app/category.json').then(res=>res.json())
    return category
};

