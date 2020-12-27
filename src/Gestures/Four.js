import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const gesture4 = new GestureDescription("Four");

gesture4.addCurl(Finger.Pinky, FingerCurl.Nocurl, 0.8);
gesture4.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

gesture4.addCurl(Finger.Thumb, FingerCurl.Nocurl, 0.9);
gesture4.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9);
gesture4.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9);

for (const finger of [Finger.Middle, Finger.Ring, Finger.Index]) {
  gesture4.addCurl(finger, FingerCurl.FullCurl, 0.9);
  gesture4.addDirection(finger, FingerDirection.VerticalDown, 0.9);
}

export default gesture4;
