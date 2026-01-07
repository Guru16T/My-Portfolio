import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import "./App.css";
import intro from "/intro.mp4";
import { ToastContainer } from "react-toastify";

function App() {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  // safety fallback
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showVideo ? (
        <div className="intro-wrapper">
          <video
            className="intro-video"
            src={intro}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
        </div>
      ) : (
        <Home />
      )}
      <ToastContainer position="bottom-right"/>
    </>
  );
}

export default App;
