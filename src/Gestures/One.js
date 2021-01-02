import { Finger, FingerCurl, FingerDirection, GestureDescription  } from 'fingerpose';

const gesture1 = new GestureDescription('1');


gesture1.addCurl(Finger.Thumb, FingerCurl.Nocurl, 1.0);
gesture1.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
for (const finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky])  {
    gesture1.addCurl(finger, FingerCurl.FullCurl, 1.0);
    gesture1.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    gesture1.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default gesture1;