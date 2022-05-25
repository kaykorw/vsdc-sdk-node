import Vsdc from '../vsdc';

describe('Stock', () => {
  const vsdc = new Vsdc({ tin: '123456789', isProduction: false });

  describe('saveStockMaster', () => {
    it('should return value', async () => {
      const result = vsdc.stockController.saveStockMaster();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('lookupStock', () => {
    it('should return value', async () => {
      const result = vsdc.stockController.lookupStock();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('saveStock', () => {
    it('should return value', async () => {
      const result = vsdc.stockController.saveStock();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
});
