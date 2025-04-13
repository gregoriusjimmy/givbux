import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import Instagram from "@/components/icons/Instagram";
import Feed from "@/components/icons/Feed";
import Playstore from "@/components/icons/Playstore";
import Apple from "@/components/icons/Apple";
import Call from "@/components/icons/Call";
import Mail from "@/components/icons/Mail";
import Location from "@/components/icons/Location";

const Footer = () => {
  const t = useTranslations("footer");
  const tc = useTranslations("common");

  return (
    <footer className="bg-background-500 pt-[5.9rem] pb-[3rem] bg-[radial-gradient(circle,_#D8D8D8_0%,_#FFFFFF_80%))] dark:bg-none dark:bg-black">
      <div className="flex flex-col relative">
        <div className="layout z-40 relative flex flex-col lg:flex-row  mb-6 lg:mb-0 lg:gap-x-2">
          <div className="flex flex-col mb-12 lg:mb-0 lg:w-[50%]">
            <Image
              className="w-[14.56rem] h-auto mb-5"
              src="/images/givbux-logo-primary.png"
              width={247}
              height={73}
              alt="Givbux"
            />
            <p className="text-foreground-400 leading-relaxed mb-5 text-xl max-w-[70%] md:max-w-[40%] lg:max-w-[70%] xl:max-w-[50%]">
              {t("sub")}
            </p>
            <div className="flex gap-x-2.5 ">
              <SocialButton
                href="https://www.facebook.com/givbux"
                icon={<Facebook className="w-5 h-5" />}
              />
              <SocialButton
                href="https://x.com/givbux"
                icon={<Twitter className="w-5 h-5" />}
              />
              <SocialButton
                href="https://www.instagram.com/Givbux"
                icon={<Instagram className="w-5 h-5" />}
              />
              <SocialButton
                href="https://givbux.com/feed/"
                icon={<Feed className="w-5 h-5" />}
              />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0  lg:w-[30%]">
            <p className="font-bold text-2xl mb-7 text-foreground-500">
              {t("download_the_app")}
            </p>
            <div className="flex flex-col w-[20rem] gap-y-2 ">
              <a
                href="https://play.google.com/store/apps/details?id=com.bearbull.givbux&hl"
                target="_blank"
                className="flex  items-center py-4 px-9 border border-transparent bg-black w-full rounded-full dark:border-primary-500"
              >
                <Playstore className="w-10 h-10 mr-3" />
                <div className="flex flex-col">
                  <p className="text-white text-sm mb-0.5">{t("get_it_on")}</p>
                  <p className="text-white text-2xl font-semibold">
                    {t("google_play")}
                  </p>
                </div>
              </a>
              <a
                href="https://apps.apple.com/us/app/givbux/id1457414414"
                target="_blank"
                className="flex  items-center py-4 px-9 border border-transparent bg-black w-full rounded-full dark:border-primary-500"
              >
                <Apple className="w-10 h-10 mr-3" />
                <div className="flex flex-col">
                  <p className="text-white text-sm mb-0.5">
                    {t("download_on_the")}
                  </p>
                  <p className="text-white text-2xl font-semibold">
                    {t("app_store")}
                  </p>
                </div>
              </a>
              <a
                href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
                target="_blank"
                className="flex  items-center py-4 px-9 border border-transparent bg-custom-green-500 w-full rounded-full"
              >
                <Image
                  src="/images/wa-icon.webp"
                  width={38}
                  height={38}
                  className="w-10 h-10 mr-3"
                  alt="WA Icon"
                />
                <div className="flex flex-col">
                  <p className="text-white text-sm mb-0.5">
                    {tc("givbux_investor_hub")}
                  </p>
                  <p className="text-white text-2xl font-semibold">
                    {tc("join_whatsapp")}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col  lg:w-[20%]">
            <p className="font-bold text-2xl text-foreground-500 mb-7">
              {t("contact_us")}
            </p>
            <div className="flex flex-col gap-y-5 ">
              <div className="flex items-center">
                <Call className="w-7 h-7 mr-8 text-foreground-500" />
                <p className="font-semibold text-foreground-500">
                  + (1) 844-448-2899
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-7 h-7 mr-8 text-foreground-500" />
                <a
                  href="mailto:info@givbux.com"
                  className="font-semibold  text-foreground-500 "
                >
                  info@givbux.com
                </a>{" "}
              </div>
              <div className="flex items-center">
                <Location className="w-7 h-7 mr-8 text-foreground-500" />
                <p className="font-semibold  text-foreground-500">
                  2751 W Coast Hwy Suite 200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="layout z-40 relative flex flex-col">
          <div className="w-full h-[1px] bg-[#DFDFDF] mb-12 lg:bg-transparent" />
          <p className="text-xl text-[#424242] dark:text-foreground-400 text-center ">
            Copyright © 2025 GivBux. All rights Reserved. |{" "}
            <a
              className="cursor-pointer"
              href="https://givbux.com/privacy-policy/"
              target="_blank"
            >
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialButton = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-13 h-13 rounded-full bg-black hover:bg-primary-500 transition-colors flex items-center justify-center p-3.5 "
    >
      {icon}
    </a>
  );
};
