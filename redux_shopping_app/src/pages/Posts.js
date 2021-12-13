import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../store/posts";

export default function Posts() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsStore);
  // console.log(posts);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="" key={post.id}>
            <h2> {post.title} :</h2>
            <h3> {post.body}</h3>
          </div>
        );
      })}
    </div>
  );
}
