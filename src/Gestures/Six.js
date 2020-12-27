import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";
  
  const gesture6 = new GestureDescription("Six");
  
  gesture6.addCurl(Finger.Index, FingerCurl.Nocurl, 1.0);
  gesture6.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

  gesture6.addCurl(Finger.Middle, FingerCurl.Nocurl, 1.0);
  gesture6.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
  
  gesture6.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
  gesture6.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
  
  for (const finger of [Finger.Ring, Finger.Pinky]) {
    gesture6.addCurl(finger, FingerCurl.FullCurl, 1.0);
    gesture6.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  }
  
  
  export default gesture6;
  