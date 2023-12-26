import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
  }
  async UpdateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25d28dabe1d541d6894bfc787ef6cc44&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    this.setState({
      articles: parseData.articles,
       totalResults: parseData.totalResults,
    loading:false
   })
  }
  async componentDidMount(){
    this.UpdateNews();
  }
   handlePreClick=async()=>{
    this.setState({page: this.state.page -1});
    this.UpdateNews();
  }

  handleNextClick=async()=>{
    this.setState({page: this.state.page +1});
    this.UpdateNews();
  }

  fetchMoreData =async()=>{
    this.setState({page: this.state.page +1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25d28dabe1d541d6894bfc787ef6cc44&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    let data= await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
       totalResults: parseData.totalResults,
    loading:false})
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>
        DailyNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading&& <Spinner/>}
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          >
          <div className='container'>
        <div className="row">
        { this.state.articles.map((element,url)=>{
          return <div className="col-md-4" key={url}>
        <NewsItem  title={element.title?element.title.slice(0,45):""} 
               description={element.description?element.description.slice(0,88):""}
               imageUrl= {element.urlToImage}
                newsUrl={element.url} author={element.author}
                 date={element.publishedAt} />
                 </div>})}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" 
        onClick={this.handlePreClick}>&larr; Previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)}
         type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
      
    )
  }
}

export default News