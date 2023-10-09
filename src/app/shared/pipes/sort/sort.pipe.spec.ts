import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let pipe: SortPipe;
  beforeEach(() => {
    pipe = new SortPipe();
  });

  it('should returns sorted array based on given field with ascending order', () => {
    const sorted = pipe.transform(
      [{ price: 2 }, { price: 5 }, { price: 1 }],
      'price'
    );
    expect(sorted).toEqual([{ price: 1 }, { price: 2 }, { price: 5 }]);
  });
});
