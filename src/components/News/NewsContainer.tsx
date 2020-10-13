import React, { Component } from "react";
import News from "./News";
import {
  getNewsSelector,
  getIsFetching,
} from "../Redux/Selectors/news-selector";
import { connect } from "react-redux";
import { getNews, getNewsRequest } from "../Redux/news-reducer";

type SourceType = {
  name: string;
  url: string;
};

type ArticleType = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: SourceType;
};
 
export type NewsPropsType = {
  articles: Array<ArticleType>;
  isFetching: boolean;
  getNewsRequest: () => void;
};

class NewsContainer extends Component<NewsPropsType> {
  componentDidMount() {
    this.props.getNewsRequest();
  }

  render() {
    console.log(this.props);
    return (
      <News articles={this.props.articles} isFetching={this.props.isFetching} />
    );
  }
}
export const mapStateToProps = (state: any) => {
  return {
    articles: getNewsSelector(state),
    isFetching: getIsFetching(state),
  };
};

export default connect(mapStateToProps, { getNews, getNewsRequest })(
  NewsContainer
);
