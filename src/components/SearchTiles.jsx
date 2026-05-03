"use client";

import { Label, SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchTilesFiled = () => {
    const [searchInp,setSearchInp]=useState("")
    const pathName=usePathname();
    const router=useRouter()
    const searchParams=useSearchParams()
    const params= new URLSearchParams(searchParams)
    const handleSearch=()=>{
        if(params){
            params.set("search",searchInp)
        }
        else{
            params.delete();
        }
        router.push(`${pathName}?${params}`)
    }
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-[600px]">
        <SearchField fullWidth name="search">
          <Label className="text-sm text-[var(--text-muted)] mb-1 block">
            Search
          </Label>

          <SearchField.Group
            className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          bg-[var(--bg-card)]
          border border-[var(--border-color)]
          transition-all duration-300
          focus-within:border-[var(--accent)]
          focus-within:shadow-md
        "
          >
            <SearchField.SearchIcon className="text-[var(--text-muted)]" />

            <SearchField.Input
              value={searchInp}
              onChange={(e)=>setSearchInp(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==='Enter'){
                    handleSearch()
                }
              }}
              placeholder="Search tiles..."
              className="
            flex-1 bg-transparent outline-none
            text-[var(--text-main)]
            placeholder:text-[var(--text-muted)]
          "
            />

            <SearchField.ClearButton onClick={()=>setSearchInp("")} />
          </SearchField.Group>
        </SearchField>
      </div>
    </div>
  );
};

export default SearchTilesFiled;
