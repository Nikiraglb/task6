import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";



function Articles() {
    return(
      <>
      <div className="logo">
        <p className="logo-text">Logo</p>
      </div>
      <div className="nav">
            <span className="links">
            <a href="/">Статьи</a>
            </span>
            <span className="links">
              <a href="/">1</a>
            </span>
            <span className="links">
              <a href="/">2</a>
            </span>
            <span className="links">
              <a href="/">3</a>
            </span>
      </div>
      
      <div className="gameslink">
          <div className="links">
            <Link to={"/"}>Назад</Link>
          </div>
        </div>


      <div className="banner">
        <p className="banner-text">Banner</p>
      </div>
      </>
    );
   


}

export default Articles;