import Vsdc from '../vsdc';

describe('Branches', () => {
  const vsdc = new Vsdc({ tin: '123456789', isProduction: false });

  describe('saveCustomer', () => {
    it('should return value', async () => {
      const result = vsdc.branchController.saveCustomer();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('saveUser', () => {
    it('should return value', async () => {
      const result = vsdc.branchController.saveUser();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('saveInsurance', () => {
    it('should return value', async () => {
      const result = vsdc.branchController.saveInsurance();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
});
