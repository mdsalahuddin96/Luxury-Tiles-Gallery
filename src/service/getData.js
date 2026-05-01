export const getData=async()=>{
    const res= await fetch('https://luxury-tiles-gallery.vercel.app/data.json');
    const data=await res.json()
    return data
}