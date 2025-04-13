import React from "react";
import CardContentImage from "./CardContentImage";
import { useTranslations } from "next-intl";
import JoinWAButton from "./JoinWAButton";

const JoinWASection = () => {
  const t = useTranslations("join_wa");

  return (
    <section className="bg-background-500 dark:bg-black ">
      <div className="layout z-40 relative">
        <CardContentImage
          imgSrcMobile="/images/wa-chat.desktop.webp"
          imgAlt="Whatsapp Chat"
          imgSrcDesktop="/images/wa-chat.desktop.webp"
          content={
            <>
              <h1 className="hidden lg:block text-white  text-center">
                <span className="font-black text-[4.2rem]">
                  {" "}
                  {t("dont_do_it_alone")}
                </span>{" "}
                <br />
                <span className="font-medium text-[3rem]">
                  {" "}
                  {t("join_givbux_insider_group")}
                </span>
              </h1>
              <h1 className="font-medium text-[2.5rem] text-white lg:hidden text-center">
                {t("main")}
              </h1>
              <p className="text-white text-2xl mt-10 lg:mt-5 lg:text-center text-center">
                {t("sub")}
              </p>
              <JoinWAButton className="w-full mt-10 mb-20 lg:mb-0 mx-auto" />
            </>
          }
        />
      </div>
    </section>
  );
};

export default JoinWASection;
