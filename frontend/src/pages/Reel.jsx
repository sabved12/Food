import React, { useEffect, useState } from "react";
import axios from "axios";
import "./reel.css";
import Video from "../component/Video";
import Logo from "../component/Logo";
// import videos1 from "../data/videos/vid1.mp4";
// import videos2 from "../data/videos/vid2.mp4";

// import videos3 from "../data/videos/vid3.mp4";

const Reel = () => {
  const [data, setData] = useState([]);
  const fetchReels = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKENDURL}/postreel`,
      headers: {},
    };

    const res = await axios.request(config);
    setData(res.data);
  };

  useEffect(() => {
    fetchReels();

    const elements = document.querySelectorAll(".videos");
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  const callback = (entries) => {
    entries.forEach((entry) => {
      const e = entry.target.childNodes[0];
      const videoElement = e.childNodes[0];
      console.log(videoElement);
      videoElement.play().then(() => {
        if (!videoElement.paused && !entry.isIntersecting) {
          videoElement.pause();
        }
      });
    });
  };
  let observer = new IntersectionObserver(callback, { threshold: 0.6 });
  return (
    <>
    
      <div className="App">
        {/* <Logo/> */}
        <center>
          {/* <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div>
        <h3>Reel</h3> */}
         
          
          <div className="video-container" id="video-container">
            {/*  */}
            {data.map((item) => (
              <div className="videos">
                <Video
                  key={item._id}
                  // channel={list.channel}
                  song={item.postedBy}
                  url={item.video}
                  likes={item.like}
                  shares={item.shares}
                  id={item._id}
                />
              </div>
            ))}
            {/*  */}
          </div>
        </center>
      </div>
    </>
  );
};

export default Reel;
