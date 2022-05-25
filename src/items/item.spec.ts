import Vsdc from '../vsdc';

describe('Items', () => {
  const vsdc = new Vsdc({ tin: '123456789', isProduction: false });

  describe('lookupItem', () => {
    it('should return value', async () => {
      const result = vsdc.itemController.lookupItem();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('lookupImportedItem', () => {
    it('should return value', async () => {
      const result = vsdc.itemController.lookupImportedItem();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('saveItem', () => {
    it('should return value', async () => {
      const result = vsdc.itemController.saveItem();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('saveItemComposition', () => {
    it('should return value', async () => {
      const result = vsdc.itemController.saveItemComposition();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
  describe('saveImportedItem', () => {
    it('should return value', async () => {
      const result = vsdc.itemController.saveImportedItem();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
});
