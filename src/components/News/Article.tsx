import React from "react";
import Preloader from "../common/Prealoder/Prealoder";
import { SourceType } from "./News";

type ArticlePropsType = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: SourceType;
  isFetching: boolean;
};

const Article: React.FC<ArticlePropsType> = ({
  title,
  description,
  url,
  image,
  publishedAt,
  source,
  isFetching,
}) => {
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <div className="article-wrapper">
        <h3 className="article-wrapper_title">{title}</h3>
        <img className="article-wrapper_image" src={image} alt="img" />
        <p className="article-wrapper_desc">{description}</p>
        <div className="article-wrapper_fotter">
          <span className="article-wrapper_fotter-author">{source.name}</span>
          <span className="article-wrapper_fotter-urlto">
            <a href={url} target="_blank" rel="noopener noreferrer">
              source
            </a>
          </span>
          <span className="article-wrapper_fotter-date">{publishedAt}</span>
          <span className="article-wrapper_fotter-source"></span>
        </div>
      </div>
    </>
  );
};

export default Article;
