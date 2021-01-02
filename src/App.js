import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { Button, Divider, Switch, List } from '@material-ui/core';
import "./App.css";
import { drawHand } from "./utilities";

import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
import Item from './Item';

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
  const [emoji, setEmoji] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');
  const [link, setLink] = useState(false);
  const [one, setOne] = useState('A');
  const [two, setTwo] = useState('B');
  const [three, setThree] = useState('C');
  const [four, setFour] = useState('D');
  const [five, setFive] = useState('E');
  const [six, setSix] = useState('F');
  const [seven, setSeven] = useState('G');
  const [eight, setEight] = useState('H')
  const handleChange = (event) => {
    setLink(toggle => !toggle);
  };

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

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const hand = await net.estimateHands(video);

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
    const map = [one, two, three, four, five, six, seven, eight];
    console.log(map[Number(currentSign.current)-1]);
    if (toggle) {
      clearInterval(detectionId.current);
      setText(text => text + ' ' + map[Number(currentSign.current)-1]);
      link && setTimeout(() => {
        window.open(map[Number(currentSign.current)-1]);
      }, 2000)
    } else {
      currentSign.current = null;
      runHandpose();
    }
    setToggle((toggle) => !toggle);
  }
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
            <Button variant="contained" color="primary" onClick={onClick}>
              {toggle ? 'Stop Predicting' : 'Start Predicting'}
            </Button>
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
          <Divider />
          <Switch onChange={handleChange} color="primary"/>
          <List dense={true} className="listStyle">
            {
              [{
                text: one,
                setText: setOne,
              }, {
                text: two,
                setText: setTwo,
              }, {
                text: three,
                setText: setThree,
              }, {
                text: four,
                setText: setFour,
              }, {
                text: five,
                setText: setFive,
              }, {
                text: six,
                setText: setSix,
              }, {
                text: seven,
                setText: setSeven,
              }, {
                text: eight,
                setText: setEight,
              }].map(({
                text,
                setText
              }, index) => <Item key={index} text={text} index={index+1} setText={(e) => setText(e.target.value)} link={link}/>)
            }
          </List>
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
          <div className="button">
            <Button variant="contained" color="primary" onClick={() => setText('')}>
              Clear
            </Button>
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
    </div >
  );
}

export default App;
