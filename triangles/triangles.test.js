"use strict";
// DON'T WORRY ABOUT WRITING THESE TESTS!

// This test file is just here for you to help you think about
// how you can break apart the logic of the application into
// smaller, more easily testable pieces.

it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  expect(validateEdge(50)).toBe(true);
  expect(validateEdge(1)).toBe(false);
  expect(validateEdge(51)).toBe(false);
});

it('should calculate areas', function () {
  let a = 3;
  let b = 4;
  let { area, hypot } = calcAreaHypotenuse(a, b);
  expect(area).toBe(6);
});

it('should calculate hypotenuses', function () {
  let a = 3;
  let b = 4;
  let { area, hypot } = calcAreaHypotenuse(a, b);
  expect(hypot).toBe(5);
});

it('should craft correct message', function () {
  expect(getHypotenuseAndAreaMsg(5, 6)).toEqual(
    "Hypotenuse is 5 and area is 6.");
  expect(getHypotenuseAndAreaMsg(36, 300)).toEqual(
    "Hypotenuse is 36 and area is 300. That's a really big triangle!");
});

it('should generate correct results', function () {
  // we'd like to have tests like this:
  // 
  // expect(getResultsFromSideLengths(3, 4)).toEqual(
  //   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
  //   
  // TODO test an invalid submission here
});


