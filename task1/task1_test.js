describe("binarySearch", function() {
  it("binarySearch([1,3,2,7,4,2], 3), answer: 1", function() {
    assert.equal(binarySearch([1,3,2,7,4,2], 3), 1);
  });
  it("binarySearch([1], 1), answer: 0", function() {
    assert.equal(binarySearch([1], 1), 0);
  });
  it("binarySearch([1], 2), answer: -1", function() {
    assert.equal(binarySearch([1], 2), -1);
  });
  it("binarySearch([], 1)), answer: -1", function() {
    assert.equal(binarySearch([], 1), -1);
  });
});