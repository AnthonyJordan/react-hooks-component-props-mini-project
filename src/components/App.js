import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList";


function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blogData.name}></Header>
      <About img={blogData.image} about={blogData.about}></About>
      <ArticleList posts={blogData.posts}></ArticleList>
    </div>
  );
}

export default App;
