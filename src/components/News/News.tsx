import React from "react";
import Atricle from "./Article";
import ScrollToTop from "react-scroll-to-top";

type MultimediaType = {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
};

type ArticleType = {
  title: string;
  description: string;
  url: string;
 publishedAt: string;
  section: string;
  multimedia: Array<MultimediaType>;
  abstract:string
  created_date:string
  byline:string
};

type NewsPropsType = {
  articles: Array<ArticleType>;
  isFetching: boolean;
};

const News: React.FC<NewsPropsType> = ({ articles, isFetching }) => {
  console.log(articles)
  const article = articles.map((article, i) => (
    <Atricle
      key={i}
      title={article.title}
      description={article.abstract}
      url={article.url}
      publishedAt={article.publishedAt}
      section={article.section}
      isFetching={isFetching}
      multimedia={article.multimedia}
      date={article.created_date}
      byLine={article.byline}
    />
  ));

  return (
    <div>
      {article}
      <ScrollToTop smooth className="up" svgPath="" />
    </div>
  );
};

export default News;
