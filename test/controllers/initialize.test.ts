import { testClient } from '../client';

describe('Initialization', () => {
  it('works', () => {
    expect(testClient.ping()).toEqual('ping!');
  });
});
