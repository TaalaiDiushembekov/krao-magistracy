import React from 'react';
import news_bg from '../src/images/news_images/news.jpeg'

const News = () => {
    return (
        <div>
            <div>
                <div  className="news_bg">
                    <img src={news_bg} alt=""/>
                   <div className="news_container">
                       <div  className="news_title">
                           <h1>
                               Новости
                           </h1>

                       </div>
                       <div className="news_video">
                        <div>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/yu4SYnfudgg"
                                    frameBorder="0"
                                    allow="accelerometer; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            <p>Лекция по истории</p>
                        </div>
                          <div>
                              <iframe width="300" height="200" src="http://krao.kg/video/1.mp4"
                                      frameBorder="0"
                                      allow="accelerometer;  muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen>
                              </iframe>
                          </div>
                           <div>
                               <iframe width="300" height="200" src="http://krao.kg/video/3.mp4"
                                       frameBorder="0"
                                       allow="accelerometer;  muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                       allowFullScreen>
                               </iframe>
                           </div>
                       </div>
                   </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default News;
