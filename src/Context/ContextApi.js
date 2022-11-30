import React, { createContext, useMemo } from "react";
import { getPostdetails } from '../services/posts'
import { useAsync } from '../Hooks/useAsync'


const Context = createContext();
export default Context

export const Provider = ({ children }) => {

     var commentbyParentTd = []


     function PostDetail(id) {
          const { loading, error, value } = useAsync(() => getPostdetails(id), [id])


          commentbyParentTd = useMemo(() => {
               const groups = {}
               if (value?.comments == null) return []
               value.comments.forEach(comment => {
                    groups[comment.parentId] ||= []
                    groups[comment.parentId].push(comment)
               })

               console.log(groups)
               return groups
          }, [value?.comments])

          return { loading, error, value }
     }


     function getReplies(parentId) {
          return commentbyParentTd[parentId]
     }


     const value = {
          postDetails: PostDetail,
          getReplies,
     }

     return (
          <Context.Provider value={value}>
               {children}
          </Context.Provider>
     );
};