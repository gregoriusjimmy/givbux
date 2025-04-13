import ButtonCTAScrollToForm from "@/components/ButtonCTAScrollToForm";
import ArrowCircleRight from "@/components/icons/ArrowCircleRight";
import ImageResponsive from "@/components/ImageResponsive";
import { useTranslations } from "next-intl";
import React from "react";

const ChartPreviewSection = () => {
  const t = useTranslations("chart");

  return (
    <section className="bg-background-500 dark:bg-black pt-[7rem]  ">
      <div className="layout flex flex-col items-center">
        <ImageResponsive
          containerClassName="lg:max-w-[70%] bg-white dark:lg:bg-custom-black-400 shadow-[0_0_50px_rgba(10,108,116,0.10)] lg:pt-[3.12rem] lg:px-[3.12rem] lg:pb-[2.8rem] lg:rounded-[1.25rem]"
          alt="Chart"
          mobile={{ height: 191, width: 410, src: "/images/chart.mobile.webp" }}
          className="w-full  lg:object-contain "
          desktop={{
            height: 535,
            width: 1079,
            src: "/images/chart.desktop.webp",
          }}
        />
        <h2 className="lg:text-6xl  lg:max-w-[45%] 2xl:max-w-[40%] text-center mt-8 mb-8 font-light text-[2.5rem] text-foreground-500">
          {t("over")} <span className="font-black">{t("count")}</span>{" "}
          {t("users_earning_cashback_daily")}
        </h2>
        <ButtonCTAScrollToForm className="flex justify-center items-center w-full lg:w-fit ">
          <ArrowCircleRight className="w-8 h-8 mr-2.5 shrink-0" />
          <div className="flex flex-col items-start">
            <p className="font-semibold mb-1 text-white uppercase">
              {t("invest_in_the_stock")}
            </p>
            <p className="font-extrabold text-xl text-white uppercase ">
              {t("start_earning")}
            </p>
          </div>
        </ButtonCTAScrollToForm>
      </div>
    </section>
  );
};

export default ChartPreviewSection;
