import React from 'react';
import news_bg from '../src/images/news_images/news.jpeg'

const News = () => {
    return (
        <div>
            <div  className="news_bg">
                <img className="new_img" src={news_bg} alt=""/>
                   <div className="news_container">
                       <div  className="news_title">
                           <h1>
                               Новости
                           </h1>
                       </div>
                       <div className="news_video">
                       </div>
                   </div>
            </div>
        </div>
    );
};

export default News;
