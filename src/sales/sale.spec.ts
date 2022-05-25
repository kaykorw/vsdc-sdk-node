import Vsdc from '../vsdc';

describe('Sales', () => {
  const vsdc = new Vsdc({ tin: '123456789', isProduction: false });

  describe('saveSale', () => {
    it('should return value', async () => {
      const result = vsdc.saleController.saveSale();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
});
