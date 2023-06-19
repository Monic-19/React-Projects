import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
   
    constructor(){
        super();
        console.log("hello i am a constructor from the cmponent ");
        this.state = {
            articles: [],
            loading :false,
            page:1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c1e4fc327954d45b33744331d2bf5f0&pageSize=18";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: data.articles
        });
    }

     prev = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c1e4fc327954d45b33744331d2bf5f0&page=${this.state.page-1}&pageSize=18`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(this.state.page);
        this.setState({
               articles: data.article,
               page : this.state.page-1
            })
            
            console.log(this.state.page-1);
        }
        
        next = async() =>{

             let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c1e4fc327954d45b33744331d2bf5f0&page=${this.state.page+1}&pageSize=18`;
             let response = await fetch(url);
             let data = await response.json();
             console.log(data);
            
             this.setState({
                 page : this.state.page+1,
                 articles: data.article,
                 })

                console.log(this.state.page+"fd");
            }


    render() {
        return (
            <div className='container my-3 text-center '>
                <h1 className='text-light'>News Monkey - Top Headlines</h1>


                <div className='row'>
               { this.state.articles.map( (element) => {

                  return (  <div className='col-md-4'>
                        <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newsurl={element.url ? element.url : ""}></NewsItem>
                    </div>)

               } ) }

                </div>

                <div className='container d-flex justify-content-between my-3' >
                    {console.log(this.state.page)}
                <button rel='noreffer' disabled={this.state.page <=1} type="button" className="btn btn-light" onClick={this.prev}>&larr; Previous</button>
                <button rel='noreffer' type="button" className="btn btn-light" onClick={this.next}>Next 	&rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
