"use client";
import ArrowCircleRight from "@/components/icons/ArrowCircleRight";
import { useTranslations } from "next-intl";
import React from "react";
import DownloadNowButton from "./DownloadNowButton";
import ButtonCTAScrollToForm from "@/components/ButtonCTAScrollToForm";

const CTAButtonsSection = () => {
  const t = useTranslations("cta_buttons");
  return (
    <section className="bg-background-500 dark:bg-black pb-16 lg:pb-[7.3rem]">
      <div className="layout flex flex-col items-center lg:flex-row lg:justify-center">
        <DownloadNowButton />
        <ButtonCTAScrollToForm
          withBorder
          variant="black"
          className="flex justify-center items-center w-full lg:w-fit"
        >
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

export default CTAButtonsSection;
