import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;
  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should returns specific length string with ...', () => {
    const truncated = pipe.transform('Lorem ipsum tolem', 5);
    expect(truncated.length).toEqual(8);
  });

  it('should returns specific length string', () => {
    const truncated = pipe.transform('Lorem ipsum tolem', 5, '');
    expect(truncated.length).toEqual(5);
    expect(truncated).toEqual('Lorem');
  });

  it('should returns actual text if provided text length is less than limit', () => {
    const truncated = pipe.transform('Lorem', 6);
    expect(truncated).toEqual('Lorem');
  });
});
