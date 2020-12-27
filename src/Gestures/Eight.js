import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";
  
  const gesture8 = new GestureDescription("Eight");
  
  gesture8.addCurl(Finger.Index, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

  gesture8.addCurl(Finger.Pinky, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

  
  gesture8.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
  
  for (const finger of [Finger.Middle, Finger.Ring]) {
    gesture8.addCurl(finger, FingerCurl.FullCurl, 1.0);
    gesture8.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  }
  
  
  export default gesture8;
  