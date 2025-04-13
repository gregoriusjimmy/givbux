import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Add from "@/components/icons/Add";

type TNewsArticle = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

const News = async () => {
  const res = await fetch("https://finnhub.io/api/v1/news?category=general", {
    headers: {
      "X-Finnhub-Token": "cvsrrr1r01qhup0smf6gcvsrrr1r01qhup0smf70",
    },
  });
  const news: TNewsArticle[] = await res.json();
  return <NewsClient news={news.slice(0, 3)} />;
};

const NewsClient = ({ news }: { news: TNewsArticle[] }) => {
  const t = useTranslations("news");

  return (
    <section className="bg-background-500 dark:bg-black lg:pt-[10.8rem] pt-11 pb-12 lg:pb-9">
      <div className="flex flex-col layout">
        <h1 className="mb-6 lg:mb-10 text-[2.5rem] lg:text-6xl text-foreground-500 font-bold text-center">
          {t("title")}
        </h1>
        <p className="text-xl text-center mb-9 lg:mb-10 text-foreground-500 lg:w-[60%] 2xl:w-[40%] lg:mx-auto">
          {t("sub")}
        </p>
        <div className="flex flex-col gap-y-9">
          {news.map((article) => (
            <Item news={article} key={article.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

const Item = ({ news }: { news: TNewsArticle }) => {
  const t = useTranslations("news");

  return (
    <div className="flex flex-col lg:flex-row lg:items-center shadow-[0_0_20px_rgba(61,68,81,0.10)] rounded-3xl">
      <div className="relative h-[18.75rem] lg:h-[23.5rem] lg:w-[45%] 2xl:w-[40%] rounded-3xl shrink-0">
        <Image
          src={news.image}
          fill
          className="w-full h-full rounded-3xl object-cover object-center"
          alt={news.headline}
        />
      </div>
      <div className="mt-10 px-6 pb-10 lg:mt-0 lg:py-12 lg:px-16">
        <p className="text-foreground-400 font-medium text-xl mb-2.5">
          By{" "}
          <span className="font-medium text-primary-500 dark:text-foreground-500">
            {news.source}
          </span>
        </p>
        <h2 className="text-foreground-400 mb-5 font-medium text-3xl">
          {news.headline}
        </h2>
        <p className="text-foreground-400 text-lg">{news.summary}</p>
        <a
          target="_blank"
          href={news.url}
          className="text-foreground-400 text-xl mt-6 flex items-center"
        >
          <span>{t("read_more")}</span>{" "}
          <span className="rounded flex items-center justify-center ml-2.5 p-1.5 bg-primary-500">
            <Add className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </div>
  );
};
