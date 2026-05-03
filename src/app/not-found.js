"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [float, setFloat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloat((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[var(--bg-body)] text-[var(--text-main)]">

      {/* Animated Icon */}
      <div
        className={`
          text-7xl mb-6 transition-transform duration-1000
          ${float ? "translate-y-2" : "-translate-y-2"}
        `}
      >
        😕
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        404 - Page Not Found
      </h1>

      {/* Description */}
      <p className="text-[var(--text-muted)] max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="
            px-6 py-3 rounded-lg font-semibold
            bg-[var(--accent)] text-white
            shadow-md
          "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}