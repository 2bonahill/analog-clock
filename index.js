/**
 * Please refer to the readme file for an introduction on the clock math used in this script.
 */

// setting up the canvas
clockSize = 800;
var c = document.getElementById("clock");
c.width = clockSize;
c.height = clockSize;
c.style.width = clockSize;
c.style.height = clockSize;
var ctx = c.getContext("2d");

// setting up the clock
var radius = clockSize * 0.45;
var tick = Math.PI / 30;
var date;
var seconds;
var minutes;
var hours;

// start the clock
setInterval(tickTock, 1000);

function tickTock() {

  // clear the canvas
  ctx.clearRect(0, 0, clockSize, clockSize);

  // prep the clockface and draw the marks
  drawClockFace();

  // and now it is about time
  date = new Date();

  /**
   * THE HOUR HAND
   */
  // get hours (0 - 59)
  hours = date.getHours() % 12;
  // the hour hand moves between the hour marks, so we need get the offset based on the minutes passed in the current hour
  hours_offset = Math.round(5 * (date.getMinutes() / 60));

  // calculate the coordinates
  var x = radius * 0.7 * Math.cos(((hours * 5) - 15 + hours_offset) * tick) + clockSize / 2;
  var y = radius * 0.7 * Math.sin(((hours * 5) - 15 + hours_offset) * tick) + clockSize / 2;

  // draw the hand
  ctx.beginPath();
  ctx.moveTo(clockSize / 2, clockSize / 2);
  ctx.lineTo(x, y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#000000';
  ctx.stroke();

  /**
   * THE MINUTE HAND
   */
  // get minutes (0 - 59)
  minutes = date.getMinutes();

  // calculate the coordinates
  var x = radius * 0.9 * Math.cos((minutes - 15) * tick) + clockSize / 2;
  var y = radius * 0.9 * Math.sin((minutes - 15) * tick) + clockSize / 2;

  ctx.beginPath();
  ctx.moveTo(clockSize / 2, clockSize / 2);
  ctx.lineTo(x, y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#000000';
  ctx.stroke();

  /**
   * THE SECOND HAND
   */
  // get seconds (0 - 59)
  seconds = date.getSeconds();

  // calculate the coordinates
  var x = radius * 0.85 * Math.cos((seconds - 15) * tick) + clockSize / 2;
  var y = radius * 0.85 * Math.sin((seconds - 15) * tick) + clockSize / 2;

  // draw the hand
  ctx.beginPath();
  ctx.moveTo(clockSize / 2, clockSize / 2);
  ctx.lineTo(x, y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();

  // draw a red little circle at the end of the sedond hand
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

function drawClockFace() {
  // the border
  ctx.beginPath();
  ctx.arc(clockSize / 2, clockSize / 2, radius * 1.00, 0, 2 * Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.stroke();

  // the minute marks on the clockface
  for (let i = 0; i < 60; i += 1) {
    var x = radius * Math.cos((i - 15) * tick) + clockSize / 2;
    var y = radius * Math.sin((i - 15) * tick) + clockSize / 2;

    ctx.beginPath();
    ctx.moveTo(clockSize / 2, clockSize / 2);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(clockSize / 2, clockSize / 2, radius * 0.9, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // the hour marks on the clockface
  for (let i = 0; i < 60; i += 5) {
    var x = radius * Math.cos((i - 15) * tick) + clockSize / 2;
    var y = radius * Math.sin((i - 15) * tick) + clockSize / 2;

    ctx.beginPath();
    ctx.moveTo(clockSize / 2, clockSize / 2);
    ctx.lineTo(x, y);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(clockSize / 2, clockSize / 2, radius * 0.8, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}
