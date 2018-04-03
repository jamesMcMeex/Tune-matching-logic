/* eslint-env jest */
import categorize from './index';

describe('categorize function basic parameters', () => {
  it('returns a given bpm value', () => {
    expect(categorize(123)).toEqual(123);
  });
});
