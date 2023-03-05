// import React, { useState, useEffect } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { React, useEffect } from "react";
import { db, auth } from "../../config/firebase-config";
import "./Home.css";
import Chart from "../../components/Chart/Chart";
import BottomIllus from "../../assets/images/bottom.png";

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
      <div className="home_page_top">
        <h1>Hi, {auth.currentUser.displayName}</h1>
      </div>
      <div className="home_page_middle">
        <div className="home_page_middle_title">Let's track your health today</div>
        <div className="home_page_middle_card">
          <div className="home_page_sleep">
            <div className="home_page_sleep_q">
              How long did you sleep today?
            </div>
            <div className="home_page_sleep_options">
              <div className="home_page_sleep_choose"> Less than 4 hrs</div>
              <div className="home_page_sleep_choose"> 4-5 hrs </div>
              <div className="home_page_sleep_choose"> 5-6 hrs </div>
              <div className="home_page_sleep_choose"> 6-7 hrs </div>
              <div className="home_page_sleep_choose"> More than 7 hrs </div>

            </div>
          </div>
          <div className="home_page_emotion">
          <div className="home_page_emotion_q">
              How are you feeling today?
            </div>
            <div className="home_page_emotion_options">
              <div className="home_page_emotion_choose"> 😀 Happy </div>
              <div className="home_page_emotion_choose"> 😴 Sleepy </div>
              <div className="home_page_emotion_choose"> 😭 Cry </div>
              <div className="home_page_emotion_choose"> 😓 Sad </div>
              <div className="home_page_emotion_choose"> 😡 Angry </div>

            </div>
          </div>
        </div>


      </div>
      <div className="home_page_bottom">
        <div className="home_page_bottom_img">
          <div className="home_page_bottom_text">User Activity</div>
          <img src={BottomIllus} alt=""/>
        </div>
        <div className="home_page_bottom_chart">
          <Chart />
        </div>

      </div>
    </div>
  );
}

export default Home;
