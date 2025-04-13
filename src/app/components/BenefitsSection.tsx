import ImageResponsive from "@/components/ImageResponsive";
import ImageTheme from "@/components/ImageTheme";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import { useTranslations } from "next-intl";
import React from "react";

const BenefitsSection = () => {
  const t = useTranslations("benefits");

  return (
    <section className="bg-background-500 relative pb-[2rem]">
      <div className="bg-primary-200 w-[40%] lg:w-[20%] h-[14.8rem] lg:h-[45.2rem] rounded-3xl absolute z-10 top-0 -left-[2rem] dark:hidden" />
      <div className="flex flex-col lg:flex-row lg:space-x-24 lg:justify-between layout pt-14 lg:pt-[9.375rem]">
        <ImageResponsive
          containerClassName="z-40 lg:w-1/2"
          className="rounded-4xl w-full h-auto max-h-[22.2rem] bg-center lg:h-full lg:max-h-none object-cover lg:w-full lg:mb-0 mb-10"
          alt="Man Cool with Laptop"
          desktop={{
            width: 792,
            height: 727,
            src: "/images/man-cool.desktop.webp",
          }}
          mobile={{
            width: 388,
            height: 356,
            src: "/images/man-cool.mobile.webp",
          }}
        />
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-foreground-500 text-[2.5rem] lg:text-[3.87rem] font-bold mb-9">
            {t("key_benefits")}
          </h1>
          <ul className="flex flex-col space-y-4">
            <Item
              title={t("title1")}
              content={t("content1")}
              cta={t("cta1")}
              iconDark="/icons/cashback.dark.svg"
              iconLight="/icons/cashback.light.svg"
            />
            <Item
              title={t("title2")}
              content={t("content2")}
              cta={t("cta2")}
              iconDark="/icons/passive-income.dark.svg"
              iconLight="/icons/passive-income.light.svg"
            />
            <Item
              title={t("title3")}
              content={t("content3")}
              cta={t("cta3")}
              iconDark="/icons/invest-grow.dark.svg"
              iconLight="/icons/invest-grow.light.svg"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

const Item = ({
  content,
  cta,
  title,
  iconDark,
  iconLight,
}: {
  title: string;
  content: string;
  cta: string;
  iconDark: string;
  iconLight: string;
}) => {
  return (
    <li className="p-4 lg:py-5 flex flex-col lg:flex-row lg:items-center shadow-[0_0_50px_rgba(10,108,116,0.10)] bg-background-500 dark:bg-custom-black-600 rounded-3xl">
      <ImageTheme
        containerClassName="shrink-0"
        className="w-[5rem] h-[5rem]"
        alt="Icon"
        height={80}
        width={80}
        srcDark={iconDark}
        srcLight={iconLight}
      />
      <div className="flex flex-col pt-5 lg:pt-0 lg:pl-5 border-t border-inverted-gray-500 mt-2.5 lg:mt-0 lg:ml-2.5 lg:border-l lg:border-t-0">
        <h2 className="mb-4 text-2xl font-bold text-foreground-500">{title}</h2>
        <p className="text-foreground-500 dark:text-white text-xl mb-4 leading-relaxed">
          {content}
        </p>
        <ScrollToFormButton className="text-primary-500 dark:text-white font-bold text-xl mb-2 w-fit">
          {cta}
        </ScrollToFormButton>
      </div>
    </li>
  );
};
