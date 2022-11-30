import React from "react";
import Post from "../components/post";
import { useParams } from 'react-router-dom'
function Postdetail() {
     const { id } = useParams()


     return (
          <div>
               <Post id={id} />
          </div>
     );
}

export default Postdetail;
