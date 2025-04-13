import ImageResponsive from "@/components/ImageResponsive";
import React, { ReactNode } from "react";

type Props = {
  content: ReactNode;
  imgSrcDesktop: string;
  imgSrcMobile: string;
  imgAlt: string;
};

const CardContentImage = ({
  content,
  imgSrcDesktop,
  imgAlt,
  imgSrcMobile,
}: Props) => {
  return (
    <div className="rounded-4xl lg:rounded-[3.1rem] flex flex-col lg:flex-row py-12 lg:py-[6rem] px-6 lg:px-[3.75rem] lg:bg-[linear-gradient(90deg,#000000,#666666)] bg-[linear-gradient(180deg,#000000,#666666)] dark:bg-[linear-gradient(180deg,#000000,#000000)] dark:border lg:dark:border-2 dark:border-dashed dark:border-gray-500">
      <div className="flex flex-col lg:w-[60%]">
        <div className="flex flex-col lg:w-[80%] lg:mx-auto justify-center h-full">
          {content}
        </div>
      </div>
      <ImageResponsive
        containerClassName="w-full lg:w-[40%]"
        className="h-[22rem] rounded-3xl object-cover bg-center w-full lg:h-full"
        alt={imgAlt}
        mobile={{
          width: 656,
          height: 369,
          src: imgSrcDesktop,
        }}
        desktop={{
          width: 568,
          height: 524,
          src: imgSrcMobile,
        }}
      />
    </div>
  );
};

export default CardContentImage;
