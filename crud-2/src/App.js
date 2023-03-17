import React, { useState, useEffect, Context } from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import { ContextData } from "./context";
import { CreatePost } from "./components/CreatePost";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { PostPage } from "./components/PostPage";
import { PostModify } from "./components/PostModify";

function App() {
  const [posts, setPosts] = useState([]);
  const URL = "http://localhost:7777/posts";
  const getPosts = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log('getPosts: ',data);
        setPosts([...data]);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <BrowserRouter>
      <ContextData.Provider value={{URL, getPosts, setPosts, posts}}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Posts posts={posts}/>
                </>
              }
            />
            <Route path="/posts/new" element={<CreatePost />} />
            <Route path="/posts/:pId" element={<PostPage posts={posts}/>} />
            <Route path="/posts/modify/:pId" element={<PostModify posts={posts}/>} />
          </Routes>
        </div>
      </ContextData.Provider>
      ;
    </BrowserRouter>
  );
}

export default App;
