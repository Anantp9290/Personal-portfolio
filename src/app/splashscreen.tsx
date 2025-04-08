"use client";

import { useState, useEffect } from "react";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="flex items-center justify-center h-full w-full bg-[#241f40] text-white text-3xl font-bold">
          Loading{dots}
        </div>
      ) : (
        <div id="root">{children}</div>
      )}
    </>
  );
}
