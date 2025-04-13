"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type Props = {
  endTime: string;
};

const Counter = ({ endTime }: Props) => {
  const t = useTranslations("common");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endTime).getTime() - new Date().getTime();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex flex-col border-2 border-primary-500 border-dashed rounded-full p-5 lg:w-full lg:max-w-[37rem] lg:mx-auto">
      <p className="font-extrabold text-xl lg:text-2xl mb-5 text-center text-white">
        {t("offer_ends_in")}
      </p>
      <p className="font-extralight text-3xl lg:text-[3.1rem] text-white text-center">
        {`${timeLeft.days}d : ${String(timeLeft.hours).padStart(2, "0")}h : ${String(timeLeft.minutes).padStart(2, "0")}m : ${String(timeLeft.seconds).padStart(2, "0")}s`}
      </p>
    </div>
  );
};

export default Counter;
