import { Spinner } from "@heroui/react";
import React from "react";

const TilesLoading = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <Spinner size="lg" />
      <span className="text-xs text-muted">Tiles Loading...</span>
    </div>
  );
};

export default TilesLoading;
