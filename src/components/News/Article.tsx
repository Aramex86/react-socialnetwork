import React from "react";
import Preloader from "../common/Prealoder/Prealoder";

type MultimediaType={
  caption: string
  copyright: string
  format: string
  height: number
  subtype: string
  type: string
  url: string
  width: number
}



type ArticlePropsType = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  section: string;
  isFetching: boolean;
  multimedia:Array<MultimediaType>
  date:string
};

const Article: React.FC<ArticlePropsType> = ({
  title,
  description,
  url,
  section,
  isFetching,
  multimedia,
  date
}) => {

const mainImage = multimedia.map(i=>i.url).slice(0,1).toLocaleString();

const publishDate = new Date(date).toLocaleDateString();
console.log(publishDate)
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <div className="article-wrapper">
        <h3 className="article-wrapper_title">{title}</h3>
        <img className="article-wrapper_image" src={mainImage} alt="img" />
        <p className="article-wrapper_desc">{description}</p>
        <div className="article-wrapper_fotter">
          <span className="article-wrapper_fotter-author">{section}</span>
          <span className="article-wrapper_fotter-urlto">
            <a href={url} target="_blank" rel="noopener noreferrer">
              source
            </a>
          </span>
          <span className="article-wrapper_fotter-date">publish date: {publishDate}</span>
          <span className="article-wrapper_fotter-source"></span>
        </div>
      </div>
    </>
  );
};

export default Article;
