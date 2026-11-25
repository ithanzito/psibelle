"use client";

import React, { useEffect, useState } from "react";

/**
 * Top Reading Progress Bar (mirroring the Happy Elementor Addons reading progress bar
 * from the reference site's blog posts).
 */
export function ReadingProgressBar(): React.ReactElement {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = (): void => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setProgress(pct);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-sage-500 via-bronze-400 to-mint-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
