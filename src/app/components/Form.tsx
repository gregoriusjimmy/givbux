import cn from "@/lib/cn";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  className?: string;
};

const Form = ({ className }: Props) => {
  const t = useTranslations("home");
  return (
    <div
      id="form"
      className={cn(
        "flex flex-col w-full rounded-tl-4xl rounded-br-4xl lg:rounded-tl-[3.1rem] lg:rounded-br-[3.1rem] overflow-clip shadow-[0_0_15px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div className="bg-primary-500 px-4 lg:px-11 lg:py-8 py-9 relative overflow-clip">
        <p className="text-white font-extrabold text-xl lg:text-[2.1rem] uppercase tracking-wide lg:leading-[1.6]">
          {t("form_title1")}
          <br />
          <span className="text-[#FFE900] font-black">{t("form_title2")}</span>
        </p>
        {/* // eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-[8.5rem] h-[9.8rem] absolute right-0 inset-y-0"
          width={136}
          height={157}
          src="/images/givbux-logo-transparent.webp"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col px-4 lg:p-11 pt-5 pb-9 bg-white gap-y-6 lg:gap-0">
        <label className="lg:mb-6">
          <p className="mb-3.5 text-2xl font-semibold lg:mb-6">
            {t("what_is_your_name")}
          </p>
          <input
            placeholder={t("full_name")}
            className="bg-[#EEEEEE] p-3.5 lg:px-7 py-6 placeholder:text-black/50 text-black text-xl w-full"
          />
        </label>
        <div className="flex flex-col gap-y-6 lg:gap-0 lg:flex-row lg:gap-x-6 w-full">
          <label className="lg:mb-10 lg:w-1/2">
            <p className="mb-3.5 text-2xl font-semibold  lg:mb-6">
              {t("email_address")}
            </p>
            <input
              placeholder={t("example_email")}
              className="bg-[#EEEEEE] p-3.5 lg:px-7 py-6 placeholder:text-black/50 text-black text-xl w-full"
            />
          </label>
          <label className="lg:mb-6 lg:w-1/2">
            <p className="mb-3.5 text-2xl font-semibold  lg:mb-6">
              {t("phone_number")}
            </p>
            <input
              placeholder={t("example_phone_number")}
              className="bg-[#EEEEEE] p-3.5 lg:px-7 py-6 placeholder:text-black/50 text-black text-xl w-full"
            />
          </label>
        </div>
        <label className="lg:mb-10 flex items-center text-xl cursor-pointer ">
          <input type="checkbox" className="mr-4 w-6 h-6 accent-primary-500" />
          <span className="text-xl">
            {t("i_have_downloaded_the_giv_bux_app")}
          </span>
        </label>
        <button className="cursor-pointer px-12 py-6 text-white font-black text-xl lg:text-2xl -none uppercase bg-black rounded-[6.2rem]">
          {t("get_my_bonus_and_updates")}
        </button>
      </div>
    </div>
  );
};

export default Form;
