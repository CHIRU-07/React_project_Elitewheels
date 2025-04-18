import React from 'react'
import { ChevronRight } from "lucide-react";
import "./Blog.css"



const articles = [
    {
      title: "The complete guide to choosing the right rental car for your next adventure",
      category: "Road Trips",
      date: "Dec 5, 2024",
      image: "https://cdn.prod.website-files.com/6751695b5f949fbb13dd9170/675175b0521c19f94e828046_blog-thumb07-p-500.jpg"
    },
    {
      title: "How to plan a stress-free road trip using a reliable rental car service",
      category: "Eco Friendly",
      date: "Dec 5, 2024",
      image: "https://cdn.prod.website-files.com/6751695b5f949fbb13dd9170/6751759a46fcc8ac1c35bc63_blog-thumb06-p-500.jpg",
    },
    {
      title: "Exploring the benefits of electric & hybrid vehicles in the car rental industry",
      category: "Safe Driving",
      date: "Dec 5, 2024",
      image: "https://cdn.prod.website-files.com/6751695b5f949fbb13dd9170/675175815c44722ad4ca7a55_blog-thumb05-p-500.jpg",
    },
    {
      title: "A closer look at car rental insurance—what it covers and why you need it",
      category: "Family Travel",
      date: "Dec 5, 2024",
      image: "https://cdn.prod.website-files.com/6751695b5f949fbb13dd9170/675175689470e823cf13de8f_blog-thumb04-p-500.jpg",
    },
    {
      title: "Everything you need to know about booking a rental car for long-term use",
      category: "Car Rentals",
      date: "Dec 5, 2024",
      image: "https://cdn.prod.website-files.com/6751695b5f949fbb13dd9170/67517501748ab34ad54a77c7_blog-thumb03-p-500.jpg",
    },
    {
      title: "Why renting a car is the most convenient option for travelers & tourists",
      category: "Safe Driving",
      date: "Dec 5, 2024",
      image: "https://cdn.prod.website-files.com/6751695b5f949fbb13dd9170/675174e246fcc8ac1c3525ed_blog-thumb02-p-500.jpg",
    },
  ];

const Blog = () => {
  return (
    <div className="blog-container">
    <h2 className="blog-title">Latest Articles</h2>
    
    <div className="blog-grid">
      {articles.map((article, index) => (
        <div key={index} className="blog-card">
          <img src={article.image} alt={article.title} className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-heading">{article.title}</h3>
            <p className="blog-meta">
              {article.date}&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;&nbsp;  <span className="blog-category">{article.category}</span>
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="pagination">
      <button className="next-btn">
        Next <ChevronRight size={18} />
      </button>
    </div>
  </div>
);
};
  

export default Blog
