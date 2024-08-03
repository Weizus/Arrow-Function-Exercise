describe('#doubleArrow', () => {
    it('should return doubles of the contents of the array', () => {
        expect(doubleArrow([1, 2, 3])).toEqual([2, 4, 6]);
    });
});

describe('#squareAndFindEvensArrow', () => {
    it('should return the even squares of a given array', () => {
        expect(squareAndFindEvensArrow([1, 2, 3])).toEqual([4]);
    });
});