// import React, { useState, useEffect } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../config/firebase-config";
import "./Home.css";

function Home({ isAuth }) {
  // const [postLists, setPostLists] = useState([]);
  // const postsCollectionRef = collection(db, "posts");

  // const getPosts = async () => {
  //   const data = await getDocs(postsCollectionRef);
  //   setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "posts", id);
  //   await deleteDoc(postDoc);
  //   getPosts();
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div className="home_page">
      {localStorage.getItem("isAuth") ? auth.currentUser.email : "Home"}
    </div>
  );
}

export default Home;
