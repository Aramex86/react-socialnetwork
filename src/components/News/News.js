import React from "react";
import Atricle from "./Article";
import ScrollToTop from "react-scroll-to-top";

const News = ({ articles }) => {
  const article = articles.map((article, i) => (
    <Atricle
      key={i}
      author={article.author}
      title={article.title}
      description={article.description}
      url={article.url}
      content={article.content}
      publishedAt={article.publishedAt}
      image={article.image}
      source={article.source}
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
