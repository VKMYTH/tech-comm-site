import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Explore More Below</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="October 15, 2019" text="The Role Of Technology In The Evolution Of Communication - Forbes"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="December 10, 2021" text="Evolution of Transport Technology Since The 18th Century - TGTS" />
        <Article imgUrl={blog03} date="April 4, 2019" text="A Brief History of Communication and Innovations that Changed the Game - Novak et Al" />
        <Article imgUrl={blog04} date="March 25, 2022" text="Digital Technology in the Evolution of Transportation - CILT International" />
        <Article imgUrl={blog05} date="April 27, 2021" text="Two Hundred Years of Global Communications - World101" />
      </div>
    </div>
  </div>
);

export default Blog;
