import { useTranslations } from "next-intl";
import React from "react";
import Counter from "./Counter";
import ArrowCircleRight from "@/components/icons/ArrowCircleRight";
import CardContentImage from "./CardContentImage";
import ScrollToFormButton from "@/components/ScrollToFormButton";

const ClaimBonusSection = () => {
  const t = useTranslations("claim_bonus");
  return (
    <section className="bg-background-500 pt-[2.5rem] pb-[3rem] lg:py-[5.8rem] relative">
      <div className="layout z-40 relative">
        <CardContentImage
          imgSrcMobile="/images/man-sitting-in-hotel.desktop.webp"
          imgAlt="Man sitting at hotel"
          imgSrcDesktop="/images/man-sitting-in-hotel.desktop.webp"
          content={
            <>
              <h1 className="hidden lg:block text-white text-[3rem] text-center">
                <span className="font-medium">{t("get_a")}</span>
                <span className="font-black"> {t("free_hotel")}</span>
                <span className="font-medium"> {t("stay_bonus")}</span>
              </h1>
              <h1 className="font-medium text-[2.5rem] text-white lg:hidden">
                {t("get_a_free_hotel_stay_bonus")}
              </h1>
              <h2 className="font-black text-[2.5rem] text-white lg:text-[4.25rem] lg:text-center">
                {t("price_bonus")}
              </h2>
              <p className="text-white text-xl lg:text-2xl my-6 lg:mb-12 lg:text-center">
                {t("info")}
              </p>
              <Counter
                endTime={new Date(
                  Date.now() + 3 * 24 * 60 * 60 * 1000,
                ).toISOString()}
              />
              <ScrollToFormButton className="cursor-pointer lg:border-4 lg:border-primary-400 lg:w-fit lg:mx-auto bg-primary-500 flex items-center py-5 px-14 lg:px-20 rounded-full  justify-center mt-6 lg:mt-12 mb-[4.3rem] lg:mb-0">
                <ArrowCircleRight className="w-8 h-8 mr-2.5 shrink-0" />
                <div className="flex flex-col items-start">
                  <p className="font-semibold mb-1 text-white uppercase">
                    {t("invest_in_the_stock")}
                  </p>
                  <p className="font-extrabold text-xl text-white uppercase ">
                    {t("claim_my_bonus")}
                  </p>
                </div>
              </ScrollToFormButton>
            </>
          }
        />
      </div>
      <div className="absolute hidden transform lg:-translate-y-1/2 lg:-bottom-1/2 lg:right-0 lg:ml-auto lg:mr-0 lg:my-auto lg:inset-y-0 dark:block w-[25.6rem] h-[25.6rem] bottom-0 inset-x-0 mx-auto bg-primary-500 rounded-full blur-[200px] z-10"></div>
    </section>
  );
};

export default ClaimBonusSection;
