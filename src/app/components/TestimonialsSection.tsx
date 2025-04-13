import StarHalf from "@/components/icons/StarHalf";
import StarRate from "@/components/icons/StartRate";
import cn from "@/lib/cn";
import { useTranslations } from "next-intl";
import React from "react";
import Testimonials from "./Testimonials";

const TestimonialsSection = () => {
  const t = useTranslations("testimonials");

  return (
    <section className="bg-background-500 pt-[5.375rem] lg:pt-[7.1rem] pb-[5rem]">
      <div className="layout">
        <div className="rounded-3xl px-5 py-12 lg:pt-[7.81rem] lg:space-x-[7.6rem] lg:pb-[8.81rem] lg:px-[5.375rem] flex lg:flex-row flex-col bg-black/60 dark:bg-black/50 bg-blend-overlay  relative lg:bg-[url('/images/woman-smile.desktop.webp')] bg-[url('/images/woman-smile.mobile.webp')] bg-center bg-cover bg-no-repeat shadow-[0_40px_20px_rgba(0,0,0,0.15)]">
          <div className="flex flex-col z-20 mb-12 lg:w-[40%]">
            <h1 className="font-bold text-[2.5rem] lg:text-6xl text-white">
              {t("title")}
            </h1>
            <p className="text-xl mt-8 text-white">{t("sub")}</p>
            <h2 className="mt-8 text-4xl text-white">{t("rated")}</h2>
            <StarBase />
            <p className="text-white text-xl">{t("number_of_review")}</p>
          </div>
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

const StarBase = () => {
  const clr = "dark:text-primary-500 text-custom-yellow-500";
  return (
    <div className="flex gap-x-3 my-4">
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarHalf width={25} height={25} className={cn("w-6 h-6", clr)} />
    </div>
  );
};
