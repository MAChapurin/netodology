import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ContextData } from "./context";
import { CreatePost } from "./components/CreatePost";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { PostPage } from "./components/PostPage";
import { PostModify } from "./components/PostModify";
import { Page404 } from "./components/Page404";

function App() {
  const [posts, setPosts] = useState([]);
  const URL = "http://localhost:7070/posts/";
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
             <Route
              path="/posts"
              element={
                <>
                  <Header />
                  <Posts posts={posts}/>
                </>
              }
            />
            <Route path="/posts/new" element={<CreatePost />} />
            <Route path="/posts/:pId" element={<PostPage />} />
            <Route path="/posts/modify/:pId" element={<PostModify posts={posts}/>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </ContextData.Provider>
      ;
    </BrowserRouter>
  );
}

export default App;
