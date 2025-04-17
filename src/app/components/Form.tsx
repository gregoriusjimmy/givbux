'use client';

import cn from "@/lib/cn";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "@/config";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(5, "Phone number is required"),
hasDownloadedApp: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  className?: string;
};

const Form = ({ className }: Props) => {
  const t = useTranslations("home");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      hasDownloadedApp: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await axios.post(`${API_BASE_URL}/users/create`, data)
      reset();
      alert("Success!");
    } catch (error) {
      console.error(error);
      alert((error  as  AxiosError<{message: string}>)?.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form"
      className={cn("flex flex-col w-full rounded-tl-4xl rounded-br-4xl lg:rounded-tl-[3.1rem] lg:rounded-br-[3.1rem] overflow-clip shadow-[0_0_15px_rgba(0,0,0,0.15)]", className)}>
      <div className="bg-primary-500 px-4 lg:px-11 lg:py-8 py-9 relative overflow-clip">
        <p className="text-white font-extrabold text-xl lg:text-[2.1rem] uppercase tracking-wide lg:leading-[1.6]">
          {t("form_title1")}<br />
          <span className="text-[#FFE900] font-black">{t("form_title2")}</span>
        </p>
        <img className="w-[8.5rem] h-[9.8rem] absolute right-0 inset-y-0"
          src="/images/givbux-logo-transparent.webp"
          alt="Logo"
          width={136}
          height={157}
        />
      </div>

      <div className="flex flex-col px-4 lg:p-11 pt-5 pb-9 bg-white gap-y-6 lg:gap-0">
        <label className="lg:mb-6">
          <p className="mb-3.5 text-2xl font-semibold lg:mb-6">{t("what_is_your_name")}</p>
          <input
            {...register("fullName")}
            placeholder={t("full_name")}
            className="bg-[#EEEEEE] p-3.5 lg:px-7 py-6 placeholder:text-black/50 text-black text-xl w-full"
          />
          {errors.fullName && <p className="text-red-500 mt-1">{errors.fullName.message}</p>}
        </label>

        <div className="flex flex-col gap-y-6 lg:gap-0 lg:flex-row lg:gap-x-6 w-full">
          <label className="lg:mb-10 lg:w-1/2">
            <p className="mb-3.5 text-2xl font-semibold lg:mb-6">{t("email_address")}</p>
            <input
              {...register("email")}
              placeholder={t("example_email")}
              className="bg-[#EEEEEE] p-3.5 lg:px-7 py-6 placeholder:text-black/50 text-black text-xl w-full"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </label>

          <label className="lg:mb-6 lg:w-1/2">
            <p className="mb-3.5 text-2xl font-semibold lg:mb-6">{t("phone_number")}</p>
            <input
              {...register("phoneNumber")}
              placeholder={t("example_phone_number")}
              className="bg-[#EEEEEE] p-3.5 lg:px-7 py-6 placeholder:text-black/50 text-black text-xl w-full"
            />
            {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber.message}</p>}
          </label>
        </div>

        <label className="lg:mb-10 flex items-center text-xl cursor-pointer ">
          <input
          {...register("hasDownloadedApp")}
          type="checkbox" className="mr-4 w-6 h-6 accent-primary-500" />
          <span className="text-xl">{t("i_have_downloaded_the_giv_bux_app")}</span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer px-12 py-6 text-white font-black text-xl lg:text-2xl uppercase bg-black rounded-[6.2rem] disabled:opacity-50"
        >
          {t("get_my_bonus_and_updates")}
        </button>
      </div>
    </form>
  );
};

export default Form;
