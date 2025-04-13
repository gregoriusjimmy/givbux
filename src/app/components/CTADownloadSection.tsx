import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Playstore from "@/components/icons/Playstore";
import Apple from "@/components/icons/Apple";
import ImageResponsive from "@/components/ImageResponsive";

const CTADownloadSection = () => {
  const t = useTranslations("cta_download");
  const tc = useTranslations("common");

  return (
    <section className="bg-background-500 pt-[8.32rem]">
      <div className="layout">
        <div className="flex items-center flex-col xl:justify-between xl:flex-row bg-[linear-gradient(90deg,#EDEDED,#D0D0D0)] dark:border-2 dark:border-primary-500 dark:border-dashed dark:bg-black dark:bg-none rounded-4xl py-12 xl:p-14 px-7">
          <div className="xl:w-[25%]">
            <Image
              alt="Friends"
              className="w-[22.31rem] h-[22.31rem] mx-auto "
              src="/images/group-seeing-phone.webp"
              width={357}
              height={357}
            />
          </div>
          <div className="flex flex-col mt-14 xl:mt-0 xl:w-[50%]">
            <h1 className="font-bold text-6xl xl:text-[4.8rem] text-foreground-500 mb-10 text-center">
              {t("title")}
            </h1>
            <p className="text-center text-4xl xl:text-[3rem] text-foreground-500 mb-10">
              {t("sub")}
            </p>
            <div className="flex flex-col xl:flex-row xl:gap-x-4 xl:justify-center">
              <a
                className="xl:w-1/3"
                href="https://play.google.com/store/apps/details?id=com.bearbull.givbux&hl"
                target="_blank"
              >
                <ButtonCTA
                  variant="black"
                  className=" xl:px-4 dark:bg-primary-500 flex justify-center items-center mx-auto w-full max-w-[25rem] xl:mx-0"
                >
                  <Playstore className="w-12 h-12 mr-2.5 shrink-0" />
                  <div className="flex flex-col items-start">
                    <p className=" mb-1 text-white uppercase">
                      {t("get_in_on")}
                    </p>
                    <p className="font-semibold text-xl text-white whitespace-pre  ">
                      {t("google_play")}
                    </p>
                  </div>
                </ButtonCTA>
              </a>
              <a
                className="xl:w-1/3"
                href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
                target="_blank"
              >
                <ButtonCTA
                  variant="black"
                  className="xl:px-4 dark:bg-primary-500 flex justify-center items-center mx-auto w-full max-w-[25rem] xl:mx-0 xl:mt-0 mt-4.5"
                >
                  <Apple className="w-12 h-12 mr-2.5 shrink-0" />
                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-white whitespace-pre">
                      {t("download_on_the")}
                    </p>
                    <p className="font-semibold text-xl text-white whitespace-pre">
                      {t("app_store")}
                    </p>
                  </div>
                </ButtonCTA>
              </a>
              <a
                href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
                target="_blank"
                className="xl:w-1/3 xl:px-4 justify-center items-center mx-auto w-full max-w-[25rem] xl:mx-0 flex py-4 px-9 border border-transparent bg-custom-green-500 rounded-full xl:mt-0 mt-4.5"
              >
                <Image
                  src="/images/wa-icon.webp"
                  width={38}
                  height={38}
                  className="w-12 h-12 mr-2.5"
                  alt="WA Icon"
                />
                <div className="flex flex-col">
                  <p className="text-white mb-1 whitespace-pre">
                    {tc("givbux_investor_hub")}
                  </p>
                  <p className="text-white text-xl font-semibold whitespace-pre">
                    {tc("join_whatsapp")}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <ImageResponsive
            containerClassName="mt-9 xl:mt-0 xl:w-[25%] "
            mobile={{
              height: 285,
              width: 335,
              src: "/images/givbux-mockup.mobile.webp",
            }}
            alt="Givbux Mockup"
            desktop={{
              height: 440,
              width: 517,
              src: "/images/givbux-mockup.desktop.webp",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTADownloadSection;
