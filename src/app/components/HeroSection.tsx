import { useTranslations } from "next-intl";
import Image, { getImageProps } from "next/image";
import React from "react";
import Form from "./Form";
import JoinWAButton from "./JoinWAButton";

const HeroSection = () => {
  const common = { alt: "Logo" };
  const t = useTranslations("home");

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 164,
    height: 45,
    src: "/images/givbux-logo.mobile.webp",
  });

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 324,
    height: 89,
    src: "/images/givbux-logo.desktop.webp",
  });

  return (
    <div className="flex flex-col bg-background-500">
      <div className="bg-[url('/images/man-playing-phone.mobile.webp')] lg:bg-[url('/images/man-playing-phone.desktop.webp')]  h-[21.7rem] lg:h-auto bg-center bg-no-repeat bg-cover bg-black">
        <div className="layout flex-col items-center h-full lg:min-h-[75rem]  2xl:min-h-[72rem] lg:h-[90vh]">
          <div className="mx-4 mt-4.5 lg:mt-[3.9rem] lg:mb-[3.5rem] h-fit">
            <picture>
              <source media="(min-width: 1024px)" srcSet={desktop} />
              <source media="(max-width: 1024px)" srcSet={mobile} />
              <img
                {...rest}
                className="w-[10.2rem] lg:w-[20.2rem] lg:h-[5.5rem]"
                alt="Logo"
              />
            </picture>
          </div>
          {/* desktop */}
          <div className="hidden lg:flex h-[80vh] lg:min-h-[75rem] ">
            <div className="w-[60%] pr-14 mb-[9.6rem]">
              <p className="text-white font-bold text-3xl bg-[#773DCD]/35 mt-[4.3rem] py-3.5 px-6 rounded-[6.5rem] uppercase mb-3.5 w-fit">
                {t("grab_text")}
              </p>
              <h1 className="font-black text-[4.5rem]/[1.2] text-white uppercase mb-6 2xl:w-[85%]">
                {t("main_text")}
              </h1>
              <p className="font-extrabold text-[2.2rem] uppercase text-white max-w-[70%] mb-6">
                {t("sub_text")}
              </p>
              <div className="flex items-center mb-11">
                <p className="mr-8 uppercase font-extrabold text-2xl text-white max-w-[20rem]">
                  {t("take_a_look_at_the_app")}
                </p>
              </div>
              <div className="flex items-center">
              <JoinWAButton />
              <Image
                  alt="qr code"
                  src="/images/givbux-qr.desktop.webp"
                  className="w-[7rem] h-auto ml-9"
                  width={112}
                  height={131}
                />
                </div>
            </div>
            <div id="form-desktop" className="w-[40%]">
              <Form className="w-full mb-[4rem]" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile only */}
      <div className="bg-[linear-gradient(180deg,#000000,#2D2D2D)] lg:hidden pb-[6.3rem]">
        <div className="flex flex-col layout items-center mx-auto">
          <h3 className="uppercase text-center text-white mt-[3.3rem] py-1.5 px-5 text-xl/relaxed bg-white/20 mx-auto rounded-[3.1rem]">
            {t("grab_text")}
          </h3>
          <h1 className="text-center font-black text-4xl/snug my-5 uppercase text-white">
            {t("main_text")}
          </h1>
          <h2 className="text-center font-extrabold text-white text-xl uppercase">
            {t("sub_text")}
          </h2>
          <div className="flex my-7 items-center">
            <p className=" text-white font-bold text-2xl text-center max-w-[20rem]">
              {t("take_a_look_at_the_app")}
            </p>
          </div>
          <JoinWAButton />
          <Image
          className="mt-5"
              alt="qr code"
              src="/images/givbux-qr.desktop.webp"
              width={84}
              height={96}
            />
          <div id="form-mobile" />
        </div>
      </div>
      <div className="layout mb-7 lg:mb-0">
        <Form className="-mt-[4rem] lg:hidden" />
      </div>
    </div>
  );
};

export default HeroSection;
