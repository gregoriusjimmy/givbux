import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import ButtonDownloadAppByOS from "@/components/ButtonDownloadAppByOS";

const CTAIconsSection = () => {
  const t = useTranslations("cta_icons");

  return (
    <section className="bg-background-500 dark:bg-black pt-[1rem] lg:pt-[3.2rem]">
      <div className="layout z-40 relative flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-[6.25rem]">
        <ButtonDownloadAppByOS className="flex flex-col items-center">
          <div className="p-11 rounded-full bg-white dark:bg-custom-black-700 shadow-[0_0_50px_rgba(242,235,248,1)] dark:shadow-[0_0_50px_#0000]">
            <Image
              src="/images/givbux-qr.desktop.webp"
              width={110}
              height={110}
              className="w-[6.875rem] h-[6.875rem]"
              alt="Givbux QR"
            />
          </div>
          <p className="font-extrabold mt-6 text-2xl uppercase text-foreground-500">
            {t("download_app")}
          </p>
        </ButtonDownloadAppByOS>
        <ScrollToFormButton className="flex flex-col items-center">
          <div className="p-11 rounded-full bg-white dark:bg-custom-black-700 shadow-[0_0_50px_rgba(242,235,248,1)] dark:shadow-[0_0_50px_#0000]">
            <Image
              src="/images/profit.webp"
              width={110}
              height={110}
              className="w-[6.875rem] h-[6.875rem]"
              alt="Profit"
            />
          </div>
          <p className="font-extrabold mt-6 text-2xl uppercase text-foreground-500">
            {t("invest_in_givbux")}
          </p>
        </ScrollToFormButton>
        <a
          href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
          target="_blank"
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="p-11 rounded-full bg-white dark:bg-custom-black-700 shadow-[0_0_50px_rgba(242,235,248,1)] dark:shadow-[0_0_50px_#0000]">
            <Image
              src="/images/whatsapp.webp"
              width={110}
              height={110}
              className="w-[6.875rem] h-[6.875rem]"
              alt="Whatsapp"
            />
          </div>
          <p className="font-extrabold mt-6 text-2xl uppercase text-foreground-500">
            {t("join_whatsapp")}
          </p>
        </a>
      </div>
    </section>
  );
};

export default CTAIconsSection;
