import React, { Component } from 'react';
import News from './News';
import {getNewsSelector} from '../Redux/Selectors/news-selector';
import { connect } from 'react-redux';
import {getNews} from '../Redux/news-reducer';
import {newsRequest} from '../../api/Api';


class NewsContainer extends Component {

componentDidMount(){
    // newsRequest().then((res) => {
    //     this.props.getNews(res.articles);
    //   });
}

    render() {
        return <News articles={this.props.articles}/>
    }
}
export const mapStateToProps = (state) => {
    return {
        articles:getNewsSelector(state),
    };
  };


export default connect(mapStateToProps,{getNews})(NewsContainer);
