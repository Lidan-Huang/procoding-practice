"use strict";

/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
    size >= 2 &&
    size <= 50);
}

/**Calculate area and hypotenuse of a right angle triangle
 * input: side a and b
 * return: object, {area, hypotenuse}
 */

function calcAreaHypotenuse(a, b) {
  let area = a * b / 2;
  let hypot = Math.round(Math.sqrt(a * a + b * b));
  return { area, hypot };
}

/**Get msg about hypotenuse and area
 * input: values of hypotenuse and area
 * return: string(msg)
 */

function getHypotenuseAndAreaMsg(hypot, area) {
  let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
  if (area > 50) {
    msg += ` That's a really big triangle!`;
  }
  return msg;
}

/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  console.log("aOk", aOk);
  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  let msg;

  if (aOk && bOk) {
    let { area, hypot } = calcAreaHypotenuse(a, b);
    msg = getHypotenuseAndAreaMsg(hypot, area);
  } else {
    msg = "";
  }

  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = msg;
  console.log('document.getElementById("msg"): ', document.getElementById("msg"));
}

