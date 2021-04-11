import React from "react";
import useFetch from "./CustomHook/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import Button from "./Button"

export default function Detail() {
  const { data: posts, loading, error } = useFetch(`users`);
  if (loading) return <Spinner />;
  if (!posts) return <PageNotFound />;
  if (error) throw error;

  return (
    <div className="page-container">
    {posts.length > 0  && (
      posts.map((item) => (
        <div className= "page-items">
        <div key= {item.id}> 
        <div className= "first-letter">
         <p>{item.name[0]}</p>
        </div>
          <div className="name">{item.name}</div>
          <div className="username">@{item.username}</div>
          <div className ="website">http://{item.website}</div>
          <Button id = {item.id} />
        </div>
        </div>
        
        
      ))
    ) }
    </div>
  );
}
