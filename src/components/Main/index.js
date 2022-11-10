import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  
  return <main id="main">


  {posts.map(
    (post) => { return <Post key={post.postId} 
    title={post.title}
    date={post.date}
    author={post.author}
    text={post.text}
    highlights={post.highlights}
    image={post.image}


    ></Post>
    })};

    

  </main>;
};

export default Main;

// postId: 0,
// title: 'a title',
// date: 'DD/MM/YY',
// author: 'author',
// text: lorem.generateParagraphs(7),
// highlights: [
//   lorem.generateWords(3),
//   lorem.generateWords(3),
//   lorem.generateWords(3),
// ],
// image: { link: 'link', alt: 'alt' },