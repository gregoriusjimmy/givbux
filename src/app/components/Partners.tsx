import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Partners = () => {
  const t = useTranslations("partners");

  return (
    <section className="bg-gray-accent-500 py-9 lg:py-14">
      <div className="flex flex-col layout lg:flex-row lg:items-center">
        <h2 className="text-foreground-500 mb-6 uppercase font-extrabold text-2xl lg:w-1/5 lg:mb-0">
          {t("our_media_partner")}
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-12 lg:grid-cols-4 lg:w-4/5">
          <div className="bg-background-500 rounded-xl lg:rounded-3xl p-7  flex items-center justify-center border border-do-gray-500 border-dashed">
            <Image
              src="/images/forbes-logo.svg"
              className="w-auto h-[2.1rem] lg:h-auto"
              alt="Forbes"
              width={141}
              height={35}
            />
          </div>
          <div className="bg-background-500 rounded-xl lg:rounded-3xl p-7  flex items-center justify-center border border-do-gray-500 border-dashed">
            <Image
              src="/images/yahoo-logo.svg"
              className="w-auto h-[2.1rem] lg:h-auto"
              alt="Yahoo"
              width={95}
              height={35}
            />
          </div>
          <div className="bg-background-500 rounded-xl lg:rounded-3xl p-7  flex items-center justify-center border border-do-gray-500 border-dashed">
            <Image
              src="/images/abc-news-logo.svg"
              className="w-auto h-[2.1rem] lg:h-auto"
              alt="ABC News"
              width={101}
              height={35}
            />
          </div>
          <div className="bg-background-500 rounded-xl lg:rounded-3xl p-7  flex items-center justify-center border border-do-gray-500 border-dashed">
            <Image
              src="/images/cnn-logo.svg"
              className="w-auto h-[2.1rem] lg:h-auto"
              alt="CNN"
              width={73}
              height={35}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
