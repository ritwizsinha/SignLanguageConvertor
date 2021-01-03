import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";
  
  const gesture7 = new GestureDescription("7");
  
  gesture7.addCurl(Finger.Index, FingerCurl.Nocurl, 1.0);
  gesture7.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

  gesture7.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
  gesture7.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
  
  for (const finger of [Finger.Pinky, Finger.Middle, Finger.Ring]) {
    gesture7.addCurl(finger, FingerCurl.FullCurl, 1.0);
    gesture7.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  }
  
  
  export default gesture7;
  