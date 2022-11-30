import React, { useContext } from "react";
import Context from '../Context/ContextApi'
import CommentList from "./commentList"
function Post({ id }) {
     const { postDetails, getReplies } = useContext(Context)
     const { loading, error, value: posts } = postDetails(id)
     const rootComments = getReplies(null)

     if (loading) {
          return <h1>Loading...</h1>
     }

     if (error) {
          <h1>
               {error}
          </h1>
     }
     return (
          <div>
               <h1>{posts.title}</h1>
               <p>{posts.body}</p>
               <h3 className="comments-title"> Comments</h3>
               <section>
                    {rootComments != null && rootComments.length > 0 && (
                         <div className="mt-4">
                              <CommentList comments={rootComments} />
                         </div>
                    )}
               </section>
          </div>
     );
}

export default Post;
