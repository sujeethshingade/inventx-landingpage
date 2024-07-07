import React, { ReactNode } from "react";

export function GridSmallBackground({ children }: { children: ReactNode }) {
  return (
    <div className={ `h-full w-full dark:bg-black bg-white bg-dot-black/[0.2] relative` }>
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
          { children }
    </div>
  );
}