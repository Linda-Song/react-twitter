import { useCallback, useContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { toast } from "react-toastify";
import { useParams , useNavigate} from "react-router-dom";
import type { PostProps } from "pages/home";
import PostBox from "./PostBox";
import Loader from "components/loader/Loader";
import { IoIosArrowBack } from "react-icons/io";



export default function PostDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [post,setPost] = useState<PostProps | null>(null);
  
  const getPost = useCallback (async() => {
    if(params.id) {
      const docRef = doc(db,"posts", params.id);
      const docSnap = await getDoc(docRef);
      setPost({...(docSnap?.data()as PostProps), id: docSnap?.id});
    }
  }, [params.id]);

  useEffect(()=>{
    if(params.id) getPost();
  }, [getPost, params.id]);

  return (
    <div className="post"> 
    <div className="post__header">
      <button type="button" onClick={() => navigate(-1)}>
      <IoIosArrowBack className="post__header-btn"/>
      </button>
    </div>
    {post ? <PostBox post={post} /> : <Loader />}</div>
  )
};