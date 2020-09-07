import React, { Component } from "react";
import News from "./News";
import { getNewsSelector,getIsFetching } from "../Redux/Selectors/news-selector";
import { connect } from "react-redux";
import { getNews,getNewsRequest } from "../Redux/news-reducer";

class NewsContainer extends Component {
  componentDidMount() {
    this.props.getNewsRequest();
  }

  render() {
    return <News articles={this.props.articles} isFetching={this.props.isFetching}/>;
  }
}
export const mapStateToProps = (state) => {
  return {
    articles: getNewsSelector(state),
    isFetching: getIsFetching(state),
  };
};

export default connect(mapStateToProps, { getNews,getNewsRequest })(NewsContainer);
