import React from "react";
import Atricle from "./Article";

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
    
  return <div>{article}</div>;
};

export default News;
