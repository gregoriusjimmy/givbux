import ImageTheme from "@/components/ImageTheme";
import { useTranslations } from "next-intl";
import React from "react";

const HowItWorksSection = () => {
  const t = useTranslations("how_it_works");
  return (
    <section className="flex flex-col bg-background-500 dark:bg-black pb-16 lg:pb-[5.3rem]">
      <div className="bg-[url('/images/fist-on-chart.mobile.webp')] lg:bg-[url('/images/fist-on-chart.desktop.webp')] bg-cover bg-center pt-[4.31rem] lg:pt-[9.87rem] pb-[8rem] lg:pb-[25.7rem]">
        <h1 className="font-bold text-5xl lg:text-[3.875rem] text-white mb-7 text-center">
          {t("how_it_works")}
        </h1>
        <p className="text-xl text-white text-center mx-auto max-w-[90%]">
          {t("sub")}
        </p>
      </div>
      <ul className="flex flex-col layout -mt-[4rem] lg:-mt-[18rem] lg:space-x-9 space-y-9 lg:flex-row lg:space-y-0">
        <Item
          title={t("title1")}
          content={t("content1")}
          imgSrc="/images/money-umbrella.svg"
          imgSrcDark="/images/money-umbrella.light.svg"
        />
        <Item
          title={t("title2")}
          content={t("content2")}
          imgSrc="/images/money-clock.svg"
          imgSrcDark="/images/money-clock.light.svg"
        />
        <Item
          title={t("title3")}
          content={t("content3")}
          imgSrc="/images/money-capital.svg"
          imgSrcDark="/images/money-capital.light.svg"
        />
      </ul>
    </section>
  );
};

export default HowItWorksSection;

const Item = ({
  content,
  imgSrc,
  imgSrcDark,
  title,
}: {
  title: string;
  content: string;
  imgSrc: string;
  imgSrcDark: string;
}) => {
  return (
    <li className="bg-background-500 rounded-3xl py-9 px-6  lg:px-12 lg:pt-12 flex flex-col items-center shadow-[0_0_50px_rgba(10,108,116,0.10)]">
      <ImageTheme
        srcLight={imgSrc}
        srcDark={imgSrcDark}
        alt="Icon"
        width={103}
        height={103}
        className="w-[6.2rem] h-[6.4rem]"
      />
      <h2 className="text-foreground-500 my-6 text-4xl text-center">{title}</h2>
      <p className="leading-relaxed text-xl text-center text-foreground-500">
        {content}
      </p>
    </li>
  );
};
