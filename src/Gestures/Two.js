import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const gesture2 = new GestureDescription("Two");

gesture2.addCurl(Finger.Index, FingerCurl.Nocurl, 1.0);
gesture2.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

gesture2.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
gesture2.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0)
gesture2.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0)


for(const finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gesture2.addCurl(finger, FingerCurl.FullCurl, 1.0);
  gesture2.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

export default gesture2;
