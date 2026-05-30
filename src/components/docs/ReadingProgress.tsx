'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      setProgress((current / total) * 100);
    };

    window.addEventListener('scroll', calculate);

    return () =>
      window.removeEventListener('scroll', calculate);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 bg-blue-600"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}