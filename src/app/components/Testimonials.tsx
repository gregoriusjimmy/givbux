"use client";

import cn from "@/lib/cn";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Quote from "@/components/icons/Quote";
import StarRate from "@/components/icons/StartRate";
import { useTranslations } from "next-intl";
import "swiper/css";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";

const Testimonials = () => {
  const t = useTranslations("testimonials");
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType>();
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);
  const slidesPerView = controlledSwiper?.params.slidesPerView ?? 1;
  const maxIndex =
    (controlledSwiper?.slides?.length ?? 1) - (slidesPerView as number);

  return (
    <div className="relative flex flex-col lg:w-[60%]">
      <div className="flex mb-8 lg:mb-12">
        <button
          onClick={() => {
            if (controlledSwiper?.isBeginning) {
              controlledSwiper.slideTo(controlledSwiper.slides.length - 1);
              return;
            }
            controlledSwiper?.slideTo(controlledSwiper.activeIndex - 1);
          }}
          className={cn(
            "cursor-pointer border-2 p-5 w-fit mr-2.5",
            currentSwipeIndex <= 0
              ? "border-white bg-transparent"
              : "border-transparent bg-primary-500",
          )}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            if (controlledSwiper?.isEnd) {
              controlledSwiper.slideTo(0);
              return;
            }
            controlledSwiper?.slideTo(controlledSwiper.activeIndex + 1);
          }}
          className={cn(
            "cursor-pointer border-2 p-5 w-fit",
            currentSwipeIndex >= maxIndex
              ? "border-white bg-transparent"
              : "border-transparent bg-primary-500",
          )}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <Swiper
        className="rounded-3xl"
        style={{ width: "100%", height: "100%" }}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        onSlideChange={(swiper) => {
          setCurrentSwipeIndex(swiper.activeIndex);
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            centeredSlides: false,
          },
        }}
        onSwiper={setControlledSwiper}
        modules={[Controller, Autoplay]}
        controller={{ control: controlledSwiper }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial
              occupation={testimonial.occupation}
              name={testimonial.name}
              text={t(`testimonial_content${index + 1}`)}
              title={t(`testimonial_title${index + 1}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

const Testimonial = ({
  name,
  occupation,
  text,
  title,
}: {
  name: string;
  occupation: string;
  text: string;
  title: string;
}) => {
  return (
    <div className="shadow-[0_0_30px_rgba(0,0,0,0.30)] px-6 py-9 flex flex-col bg-background-500 rounded-3xl lg:rounded-4xl h-full">
      <Quote className="text-primary-500/90 w-9 h-6 mb-6" />
      <h3 className="font-bold text-foreground-500 text-xl mb-2.5">{title}</h3>
      <StarFull />
      <p className="text-xl mt-2.5 text-foreground-500 mb-4 break-words">
        {text}
      </p>
      <span className="text-2xl text-foreground-500 mt-auto">{name}</span>
      <span className="text-[#4D4D4D] dark:text-foreground-500">
        {occupation}
      </span>
    </div>
  );
};

const TESTIMONIALS = [
  { name: "Kenyatto J.", occupation: "Founder - MELTEE Inc." },
  {
    name: "John A.",
    occupation: "Founder- Abc LLC.",
  },
  {
    name: "Alex Luna",
    occupation: "United States",
  },
  {
    name: "Carlos Moore",
    occupation: "United States",
  },
];

const StarFull = () => {
  const clr = "dark:text-primary-500 text-custom-yellow-500";
  return (
    <div className="flex gap-x-3 my-4">
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
      <StarRate width={25} height={25} className={cn("w-6 h-6", clr)} />
    </div>
  );
};
