"use client";

import React from "react";

import { useTranslations } from "next-intl";
import ButtonCTA from "@/components/ButtonCTA";
import ArrowCircleRight from "@/components/icons/ArrowCircleRight";
import { getMobileOS } from "@/helpers/getMobileOS";

const DownloadNowButton = () => {
  const t = useTranslations("cta_buttons");

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
    <ButtonCTA
      onClick={handleClick}
      withBorder
      className="flex justify-center items-center w-full mb-6 lg:mb-0 lg:mr-6 lg:w-fit border-primary-500"
    >
      <ArrowCircleRight className="w-8 h-8 mr-2.5 shrink-0" />
      <div className="flex flex-col items-start">
        <p className="font-semibold mb-1 text-white uppercase">
          {t("download_the_app")}
        </p>
        <p className="font-extrabold text-xl text-white uppercase ">
          {t("download_now")}
        </p>
      </div>
    </ButtonCTA>
  );
};

export default DownloadNowButton;
