"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {ChevronLeft} from '@gravity-ui/icons';
import {ChevronRight} from '@gravity-ui/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { CategoryContext } from "@/provider/CategoryProvider";

const CategoryButton = ({ categories }) => {
  const {setCategory}=useContext(CategoryContext)
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const handleCategory = (e) => {
    const searchCategory = e.target.name;
    params.set("category", searchCategory);
    setCategory(searchCategory);
    router.push(`${pathName}?${params}`);
  };

  return (
    <div className="relative px-10 bg-[var(--bg-card)] py-5 rounded-xl">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 9 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <button
              key={category.id}
              onClick={handleCategory}
              name={category.category}
              className="btn-secondary"
            >
              {category.category.charAt(0).toUpperCase() +
                category.category.slice(1)}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
     
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <ChevronLeft/>
      </button>

      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <ChevronRight/>
      </button>
    </div>
  );
};

export default CategoryButton;
