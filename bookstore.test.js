"use strict";

it('should price books correctly', function () {
  expect(getPrice(books[0])).toEqual(5.40);
  expect(getPrice(books[1])).toEqual(10.80); 
});

it('should mark books count correctly', function () {
  expect(sellBook(books[3])).toEqual(3);
  expect(function() {sellBook(books[2])}).toThrow();
});
