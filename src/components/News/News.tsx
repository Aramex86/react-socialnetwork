import React from "react";
import Atricle from "./Article";
import ScrollToTop from "react-scroll-to-top";


export type SourceType = {
  name: string
  url: string
};

type ArticleType = {
  title: string
  description: string
  url: string
  image: string;
  publishedAt: string
  source: SourceType
};

type NewsPropsType={
  articles:Array<ArticleType>
  isFetching:boolean
}



const News:React.FC<NewsPropsType> = ({ articles,isFetching }) => {
  const article = articles.map((article, i) => (
    <Atricle
      key={i}
      title={article.title}
      description={article.description}
      url={article.url}
      publishedAt={article.publishedAt}
      image={article.image}
      source={article.source}
      isFetching={isFetching}
    />
  ));

  return (
    <div>
      {article}
      <ScrollToTop
        smooth
        className="up"
        svgPath=''
      />
    </div>
  );
};

export default News;
