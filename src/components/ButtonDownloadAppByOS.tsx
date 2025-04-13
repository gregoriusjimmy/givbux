"use client";

import { getMobileOS } from "@/helpers/getMobileOS";
import cn from "@/lib/cn";
import React from "react";

interface ButtonDownloadAppByOSProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonDownloadAppByOS = React.forwardRef<
  HTMLButtonElement,
  ButtonDownloadAppByOSProps
>(({ children, className, ...props }, ref) => {
  const handleClick = () => {
    const os = getMobileOS();
    if (os === "android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.bearbull.givbux&hl";
    } else if (os === "ios") {
      window.location.href =
        "https://apps.apple.com/us/app/givbux/id1457414414";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.bearbull.givbux&hl"; // fallback
    }
  };

  return (
    <button
      className={cn("cursor-pointer", className)}
      {...props}
      ref={ref}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

ButtonDownloadAppByOS.displayName = "ButtonDownloadAppByOS";

export default ButtonDownloadAppByOS;
