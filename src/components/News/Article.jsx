import React from "react";

const Article = ({
  author,
  title,
  description,
  url,
  urlToImage,
  content,
  publishedAt,
}) => {
  return (
    <div className="article-wrapper">
      <h3 className="article-wrapper_title">{title}</h3>
      <img className="article-wrapper_image" src={urlToImage} alt="img" />
      <p className="article-wrapper_desc">{content}</p>
      <div className="article-wrapper_fotter">
        <span className="article-wrapper_fotter-author">{author}</span>
        <span className="article-wrapper_fotter-urlto"><a href={url} target="_blank" rel="noopener noreferrer">go to</a></span>
        <span className="article-wrapper_fotter-date">{publishedAt}</span>
      </div>
    </div>
  );
};

export default Article;
