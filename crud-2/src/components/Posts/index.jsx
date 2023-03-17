import React, { useState, useEffect, Context } from "react";
import { Post } from "../Post"

export function Posts({posts}) {
    useEffect(() => {
        console.log('Posts:',posts)
    }, [])
    return (
        <div className="posts">
            {posts.map((post)=> {
                return (
                    <Post key={post.id} content={post.content} created={post.created} id={post.id}/>
                )
            })}
        </div>
    )
}