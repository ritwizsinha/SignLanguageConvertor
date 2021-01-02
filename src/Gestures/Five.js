import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const gesture5 = new GestureDescription("5");

for (const finger of [
  Finger.Index,
  Finger.Thumb,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  gesture5.addCurl(finger, FingerCurl.Nocurl, 1.0);
  gesture5.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default gesture5;
