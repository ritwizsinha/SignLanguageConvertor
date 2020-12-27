import React, { useRef, useState } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
///////// NEW STUFF IMPORTS
import {
  gesture1,
  gesture2,
  gesture3,
  gesture4,
  gesture5,
  gesture6,
  gesture7,
  gesture8,
} from "./Gestures";
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const detectionId = useRef(null);
  const currentSign = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);

  const [sign1, setSign1] = useState("one");
  const [sign2, setSign2] = useState("two");
  const [sign3, setSign3] = useState("three");
  const [sign4, setSign4] = useState("four");
  const [sign5, setSign5] = useState("five");
  const [sign6, setSign6] = useState("six");
  const [sign7, setSign7] = useState("seven");
  const [sign8, setSign8] = useState("eight");
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');

  const images = { thumbs_up: thumbs_up, victory: victory };
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    detectionId.current = setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          gesture2,
          gesture3,
          gesture1,
          gesture4,
          gesture5,
          gesture6,
          gesture7,
          gesture8,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          console.log(gesture.gestures[maxConfidence].name);
          if (!currentSign.current) currentSign.current = gesture.gestures[maxConfidence].name;
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    if (toggle) {
      clearInterval(detectionId.current);
      setText(text => text + currentSign.current);
    } else {
      currentSign.current = null;
      runHandpose();
    }
    setToggle((toggle) => !toggle);
  }
  // useEffect(() => {
  //   runHandpose();
  // }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="mainHeader">Multipurpose Sign Language Detector</div>
        <div className="headerContent">
          Detecting Sign Language to perform various tasks.
        </div>
      </div>
      <div className="container">
        <div className="leftContainer">
          <div className="button">
            <button onClick={onClick}>
              {toggle ? 'Stop Predicting' : 'Start Predicting'}
            </button>
          </div>
          <div className="videoContainer">
            <Webcam
              ref={webcamRef}
              style={{
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 480,
                height: 300,
              }}
            />
          </div>
          <div className="inputDict">
            <div style={{textAlign: 'center'}}>Dictionary for 8 signs</div>
            <div style={{margin: "0 auto"}}>
              <ul style={{listStyleType: 'none', textAlign: 'center'}} className="dictionaryList">
                <li>
                  <div >Sign 1</div>
                  <input
                    value={sign1}
                    onChange={(e) => setSign1(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 2</div>
                  <input
                    value={sign2}
                    onChange={(e) => setSign2(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 3</div>
                  <input
                    value={sign3}
                    onChange={(e) => setSign3(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 4</div>
                  <input
                    value={sign4}
                    onChange={(e) => setSign4(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 5</div>
                  <input
                    value={sign5}
                    onChange={(e) => setSign5(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 6</div>
                  <input
                    value={sign6}
                    onChange={(e) => setSign6(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 7</div>
                  <input
                    value={sign7}
                    onChange={(e) => setSign7(e.target.value)}
                  />
                </li>
                <li>
                  <div>Sign 8</div>
                  <input
                    value={sign8}
                    onChange={(e) => setSign8(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="canvasContainer">
            <canvas
              ref={canvasRef}
              style={{
                textAlign: "center",
                zindex: 9,
                width: 480,
                height: 300,
              }}
            />            
          </div>
          <div className="text">
            {text}
          </div>
        </div>
      </div>
      <header className="App-header">
        {/* NEW STUFF */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}

        {/* NEW STUFF */}
      </header>
    </div>
  );
}

export default App;
