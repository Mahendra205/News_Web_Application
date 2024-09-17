import React, { Component } from "react";

export class NewsItem extends Component {
  

  render() {
    let { title, description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div
          className="card"
           
        ><div style={
          {
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }
        }>
          <span className="badge rounded-pill bg-danger">
          {source} </span>
          </div>
          <img alt="..." className="card-img-top" src={imageUrl?imageUrl:"https://s.yimg.com/ny/api/res/1.2/88GFB0dYHdWZwQlTgiqbGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTk-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/0627bfe0-6ee1-11ef-abf9-a59873789eb6"} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a className="btn btn-sm btn-dark" href={newsUrl} target="_blank"rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
