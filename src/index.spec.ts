import { atm } from ".";

it("Should return 1 x 500 bill", function () {
  // Given
  // When
  // Then
  expect(atm(500)).toEqual([1, 0, 0, 0, 0, 0]);
});

it("Should return 1 x 10 bill", function () {
  // Given
  // When
  // Then
  expect(atm(10)).toEqual([0, 0, 0, 0, 0, 1]);
});

it("Should return 1 x 20 + 1 x 10 bills", function () {
  // Given
  // When
  // Then
  expect(atm(30)).toEqual([0, 0, 0, 0, 1, 1]);
});

it("Should return 1 x 200 + 1 x 50 + 1 x 20 bills", function () {
  // Given
  // When
  // Then
  expect(atm(270)).toEqual([0, 1, 0, 1, 1, 0]);
});
