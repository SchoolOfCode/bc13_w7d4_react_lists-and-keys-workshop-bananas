import React from 'react';

import './index.css';

function Post({key, title, date, author, text, highlights, image}) {
  return <article>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <h3>{author}</h3>
    <p>{text}</p>
    {highlights.map((currentElement, index)=> {
      return <li key={index}>{currentElement}</li>
    })}


  </article>;
}

export default Post;
