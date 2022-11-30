import React from "react";
import Comment from "./comment"
function commentList({ comments }) {
     return comments.map((com) => {
          return (
               <div key={com.id} className="comment-stack">
                    <Comment {...com} />
               </div>
          )
     });
}

export default commentList;
