import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const gesture3 = new GestureDescription("3");

for (const finger of [
  Finger.Index,
  Finger.Thumb,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky, 
]) {
  gesture3.addCurl(finger, FingerCurl.Nocurl, 1.0);
  gesture3.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default gesture3;
