'use client'
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { createPortal } from "react-dom";
import Close from "@/components/icons/Close";
import ButtonCTA from "@/components/ButtonCTA";
import Apple from "@/components/icons/Apple";
import Playstore from "@/components/icons/Playstore";
import Image from "next/image";

const IntroPopup = () => {
  const [isOpen,setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const t = useTranslations("intro_popup");
  const tc = useTranslations("common");


  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div className="w-full min-h-[70rem] lg:min-h-[60rem] h-screen z-[999] bg-black/50 top-0 flex justify-center items-center fixed">
      <div className=" flex  flex-col w-full lg:w-[80%] lg:max-w-[68rem] lg:min-w-80 bg-primary-500 dark:bg-black relative py-10 px-7 lg:p-12">
        <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center absolute -top-4 right-0 lg:right-4 lg:top-4 cursor-pointer  shadow-[0_4px_4px_rgba(0,0,0,0.25)]" onClick={()=>setIsOpen(false)}><Close className="w-5 h-5" /></button>
      <h1 className="shadow-text stroke-text font-bold lg:font-extrabold text-4xl lg:text-[2.75rem] text-white text-center uppercase">{t('p1')}</h1>
      <h1 className="mb-8 shadow-text stroke-text font-black lg:font-extrabold text-4xl lg:text-[4.43rem] text-white text-center uppercase">{t('p2')}</h1>
        <iframe
        width={861} 
        height={483}
        className="top-0 left-0 w-full h-auto rounded-3xl aspect-video max-w-[30rem] lg:max-w-[53.81rem]  mx-auto"
        src="https://www.youtube.com/embed/u532qtIhqi0"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col mt-8 lg:flex-row">
        <div className="flex flex-col lg:w-full">
        <p className="text-white font-bold text-xl text-center lg:text-left mb-5 uppercase lg:mb-4.5">{tc('download_app')}</p>
     <div className="flex flex-col lg:flex-row items-center lg:w-full lg:gap-5 lg:h-fit">
      <a
                className="lg:w-1/3 w-[20rem]"
                href="https://play.google.com/store/apps/details?id=com.bearbull.givbux&hl"
                target="_blank"
              >
                <ButtonCTA
                  variant="black"
                  className=" lg:px-4 dark:bg-primary-500 flex justify-center items-center mx-auto w-full max-w-[25rem] lg:mx-0"
                >
                  <Playstore className="w-12 h-12 mr-2.5 shrink-0" />
                  <div className="flex flex-col items-start">
                    <p className=" mb-1 text-white uppercase">
                      {tc("get_it_on")}
                    </p>
                    <p className="font-semibold text-xl text-white whitespace-pre  ">
                      {tc("google_play")}
                    </p>
                  </div>
                </ButtonCTA>
              </a>
              <a
                className="lg:w-1/3 w-[20rem]"
                href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
                target="_blank"
              >
                <ButtonCTA
                  variant="black"
                  className="lg:px-4 dark:bg-primary-500 flex justify-center items-center mx-auto w-full max-w-[25rem] lg:mx-0 lg:mt-0 mt-4.5"
                >
                  <Apple className="w-12 h-12 mr-2.5 shrink-0" />
                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-white whitespace-pre">
                      {tc("download_on_the")}
                    </p>
                    <p className="font-semibold text-xl text-white whitespace-pre">
                      {tc("app_store")}
                    </p>
                  </div>
                </ButtonCTA>
              </a>
              <a
                href="https://chat.whatsapp.com/Iw8NaAdNFyd7o4dlhhDN5I"
                target="_blank"
                className=" lg:w-1/3 lg:px-4 justify-center items-center mx-auto w-[20rem]  max-w-[25rem] lg:mx-0 flex py-4 px-9 border border-transparent bg-custom-green-500 rounded-full lg:mt-0 mt-4.5"
              >
                <Image
                  src="/images/wa-icon.webp"
                  width={38}
                  height={38}
                  className="w-12 h-12 mr-2.5"
                  alt="WA Icon"
                />
                <div className="flex flex-col">
                  <p className="text-white mb-1 whitespace-pre">
                    {tc("givbux_investor_hub")}
                  </p>
                  <p className="text-white text-xl font-semibold whitespace-pre">
                    {tc("join_whatsapp")}
                  </p>
                </div>
              </a>
          
                </div>
                </div>

                <Image
                  alt="qr code"
                  src="/images/givbux-qr.desktop.webp"
                  className="w-[7rem] lg:w-[9.12rem] h-auto mt-10 mx-auto lg:ml-12 lg:mt-0 lg:shrink-0"
                  width={112}
                  height={131}
                />
      </div>
      </div>
    </div>,
    document.body
  );
};

export default IntroPopup;
