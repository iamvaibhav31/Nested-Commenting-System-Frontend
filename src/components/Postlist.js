import React from 'react';
import { getPost } from '../services/posts'
import { Link } from "react-router-dom";
import { useAsync } from '../Hooks/useAsync'
function Postlist() {
     const { loading, error, value: posts } = useAsync(getPost)

     if (loading) {
          return <h1>Loading...</h1>
     }

     if (error) {
          <h1>
               {error}
          </h1>
     }

     return posts.map((p) => {
          return (
               <h1 key={p.id}>
                    <Link to={'/posts/' + p.id}>{p.title}</Link>
               </h1>
          )
     });
}

export default Postlist;
