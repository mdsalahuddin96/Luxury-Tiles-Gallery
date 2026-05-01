import { Spinner } from "@heroui/react";
import React from "react";

const MainPageLoading = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <Spinner color='success' size="lg" />
      <span className="text-xs text-muted">Tiles Loading...</span>
    </div>
  );
};

export default MainPageLoading;
