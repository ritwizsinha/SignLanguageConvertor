import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";
  
  const gesture7 = new GestureDescription("Seven");
  
  gesture7.addCurl(Finger.Index, FingerCurl.Nocurl, 1.0);
  gesture7.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

  gesture7.addCurl(Finger.Middle, FingerCurl.Nocurl, 1.0);
  gesture7.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

  gesture7.addCurl(Finger.Ring, FingerCurl.Nocurl, 1.0);
  gesture7.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
  
  gesture7.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
  gesture7.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
  
  for (const finger of [Finger.Pinky]) {
    gesture7.addCurl(finger, FingerCurl.FullCurl, 1.0);
    gesture7.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  }
  
  
  export default gesture7;
  