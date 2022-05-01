import { testClient } from '../client';

describe('Select Initialization Info', () => {
  return testClient.selectInitInfo().then(data => {
    expect(data).toBe(true);
  });
});
