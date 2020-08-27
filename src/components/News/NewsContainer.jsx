import React, { Component } from 'react';
import News from './News';
import {getNewsSelector} from '../Redux/Selectors/news-selector';
import { connect } from 'react-redux';
import {getNews} from '../Redux/news-reducer';
import * as axios from "axios";

class NewsContainer extends Component {

componentDidMount(){
     axios.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=050a8dc039ff4b9e81bea7ad19bab7ce').then((res)=>{
        this.props.getNews(res.data.articles);
        
      });
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
