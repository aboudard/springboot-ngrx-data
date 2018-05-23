import { CalculePipe } from './calcule.pipe';
let pipe: CalculePipe;
describe('CalculePipe', () => {
  beforeEach(() => {
    pipe = new CalculePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return correct data', () => {
    expect(pipe.transform(4)).toBe(16);
  });
});
