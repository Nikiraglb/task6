import React from 'react'
import "./style.css"



function Home() {
    return(
      <>
      <div className="logo">
        <p className="logo-text">Logo</p>
      </div>
      <div className="nav">
            <span className="linkWrap">
            <a href="/">Статьи</a>
            </span>
            <span className="linkWrap">
              <a href="/Games">Игра</a>
            </span>
            <span className="linkWrap">
              <a href="/">Тесты</a>
            </span>
      </div>

      <div className="banner">
        <p className="banner-text">Banner</p>
      </div>
      </>
    );
   


}

export default Home;