# A purely Javascript based analog clock

This is the math used for drawing the clock. Check it out [here](https://htmlpreview.github.io/?https://github.com/2bonahill/analog-clock/blob/main/index.html).

[Alt text](https://github.com/2bonahill/analog-clock/blob/main/analog-clock.png)

## Background:
 
As Math.sin uses radians (not angles in degrees) as input, we have to do all in radians. In a unit circle (where radius = 1), the circumference is 2*pi, which corresponds to 360 degrees.
  
It all starts at 3 o'clock, where we have 0 radian and 0 degrees. Moving clockwise we will linearly get 
- (2*pi)/4 = pi/2 at 6 o'clock
- pi at 9 o'clock
- 3*pi/2 at 12 o'clock
- 2*pi = 0 = 3 o'clock


Note: as it all starts at 3 o'clock we need to adjust later on in the math.
 
On a clock where a tick corresponds to 6 degrees (a 60th of 360 degrees) we have
1 tick = 2*pi/60 = pi/30
