import Vsdc from '../vsdc';

describe('Purchases', () => {
  const vsdc = new Vsdc({ tin: '123456789', isProduction: false });

  describe('lookupPurchase', () => {
    it('should return value', async () => {
      const result = vsdc.purchaseController.lookupPurchase();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('savePurchase', () => {
    it('should return value', async () => {
      const result = vsdc.purchaseController.savePurchase();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
});
