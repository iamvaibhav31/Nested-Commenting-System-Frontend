import React, { useContext, useState } from "react";
import Context from '../Context/ContextApi'
import IconBtn from "./IconBtn";
import CommentList from "./commentList";
import { FaEdit, FaHeart, FaReply, FaTrash } from "react-icons/fa"

const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" })

function Comment({ id, message, user, createdAt }) {
     const { getReplies } = useContext(Context)
     const childrenComments = getReplies(id)
     const [arechildrenhidden, setarechildrenhidden] = useState(false)
     console.log(" child comments => ", childrenComments)
     return (
          <>
               <div className="comment">
                    <div className="header">
                         <span className="name">{user.name}</span>
                         <span className="date">{dateFormatter.format(Date.parse(createdAt))}</span>
                    </div>
                    <div className="message"> {message}</div>
                    <div className="footer">
                         <IconBtn Icon={FaHeart} aria-label="Like">
                              2
                         </IconBtn>
                         <IconBtn Icon={FaReply} aria-label="Reply" />
                         <IconBtn Icon={FaEdit} aria-label="Edit" />
                         <IconBtn Icon={FaTrash} aria-label="Delete" color="danger" />
                    </div>
               </div>
               {childrenComments?.lenght > 0 && (
                    <>
                         <div className={"nested-comments-stack " + arechildrenhidden ? "hide" : ""}>

                              <button className="collapse-line" aria-label="Hide Replies" onClick={() => setarechildrenhidden(true)} />
                              <div className="nested-comments">
                                   <CommentList comments={childrenComments} />m
                              </div>
                         </div>
                         <button className={" btn mt-1 " + !arechildrenhidden ? "hide" : ""}
                              onClick={() => setarechildrenhidden(false)}>
                              Show Replies
                         </button>
                    </>
               )}
          </>
     );
}

export default Comment;
