import React, { Component } from 'react'

export class NewsItem extends Component {

   

    render() {
      let  {title,description,imgurl,newsurl} = this.props;
    

        return (
            <div className='my-3'>
                <div className="card px-2 py-2 bg-dark text-white border border-light " style={{width: "24rem" , height :"30rem"}}>
                    <img src={imgurl ? imgurl : "https://www.wcia.com/wp-content/uploads/sites/44/2023/06/GettyImages-464646860-1.jpg?w=1280"} className="card-img-top rounded border border-light" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description.slice(0,80)}...</p>
                            <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                         
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
