import Vsdc from '../vsdc';

describe('Info', () => {
  const vsdc = new Vsdc({
    tin: '123456789',
    isProduction: false,
    vsdcHostname: 'https://vsdc.kayko.rw',
    deviceSerialNo: '00',
  });

  describe('initialInfo', () => {
    it('should return values', async () => {
      const result = vsdc.infoController.initialInfo();
      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('lookupCodes', () => {
    it('should return values', async () => {
      const result = vsdc.infoController.lookupCodes();

      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('lookupItemClassification', () => {
    it('should return values', async () => {
      const result = vsdc.infoController.lookupItemClassification();

      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('lookupCustomerByTin', () => {
    it('should return values', async () => {
      const result = vsdc.infoController.lookupCustomerByTin(vsdc.tin);

      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('lookupBranch', () => {
    it('should return values', async () => {
      const result = vsdc.infoController.lookupBranch();

      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });

  describe('lookupNotices', () => {
    it('should return values', async () => {
      const result = vsdc.infoController.lookupNotices();

      expect(result).toMatchInlineSnapshot(`Promise {}`);
    });
  });
});
