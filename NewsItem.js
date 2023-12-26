import React from 'react'

const NewsItem =(props)=> {
    
  
    let {title, description, imageUrl, newsUrl, author, date}=props;
    return (
      <div className='my-3'>
        <div className="card" >
  <img src= {!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/indus-sixteen_nine.jpg?VersionId=QzBQabaAh.H9AyL1EFypHxJmq.VjaRnp":imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">
      {description}...
    </p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknowm": author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
      Read More
    </a>
  </div>
</div>

      </div>
    )
  }


export default NewsItem