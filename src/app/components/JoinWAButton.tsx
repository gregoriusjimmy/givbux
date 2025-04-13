import cn from "@/lib/cn";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const JoinWAButton = ({ className }: Props) => {
  const tc = useTranslations("common");

  return (
    <a
      href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
      target="_blank"
      className={cn(
        "flex border-4  justify-center items-center py-4 px-9 border-[#269937] bg-custom-green-500 w-full lg:max-w-[25.375rem] rounded-full",
        className,
      )}
    >
      <Image
        src="/images/wa-icon.webp"
        width={38}
        height={38}
        className="w-10 h-10 mr-3"
        alt="WA Icon"
      />
      <div className="flex flex-col">
        <p className="text-white font-semibold mb-0.5 uppercase">
          {tc("givbux_investor_hub")}
        </p>
        <p className="text-white text-2xl font-extrabold uppercase">
          {tc("join_whatsapp")}
        </p>
      </div>
    </a>
  );
};

export default JoinWAButton;
