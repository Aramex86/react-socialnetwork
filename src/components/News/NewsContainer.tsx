import React, { Component } from "react";
import News from "./News";
import {
  getNewsSelector,
  getIsFetching,
} from "../Redux/Selectors/news-selector";
import { connect } from "react-redux";
import { getNews, getNewsRequest } from "../Redux/news-reducer";
import { compose } from "redux";
import { withRouter } from "react-router";
import WithAuthRedirect from "../HOC/WithAuthRedirect";



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

type ArticleType = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  section: string;
  multimedia:Array<MultimediaType>
  abstract:string
  created_date:string
  byline:string
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
    authUserId: state.auth.userId,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getNews, getNewsRequest }),
  WithAuthRedirect
)(NewsContainer);
