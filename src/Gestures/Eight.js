import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";
  
  const gesture8 = new GestureDescription("8");
  
  gesture8.addCurl(Finger.Index, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

  gesture8.addCurl(Finger.Pinky, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

  gesture8.addCurl(Finger.Middle, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

  
  gesture8.addCurl(Finger.Ring, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

  gesture8.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
  gesture8.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
  export default gesture8;
  