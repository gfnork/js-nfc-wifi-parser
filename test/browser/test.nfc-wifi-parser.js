var nfcPayload = [16, 14, 0, 62, 16, 38, 0, 1, 1, 16, 69, 0, 11, 87, 76, 65, 78, 45, 56, 50, 67, 81, 90, 54, 16, 3, 0, 2, 0, 34, 16, 15, 0, 2, 0, 12, 16, 39, 0, 16, 52, 57, 53, 54, 52, 52, 53, 54, 56, 48, 51, 57, 48, 50, 54, 51, 16, 32, 0, 6, -1, -1, -1, -1, -1, -1];

describe('nfcWifiParser', function () {
  describe('#parseBytes()', function () {
    it('should parse without error', function (done) {
      nfcWifiParser.parseBytes(nfcPayload, function (err, result) {
        result.should.be.an.instanceOf(Object);
        result.should.have.property('authType', 'WPA_PSK');
        result.should.have.property('ssid', 'WLAN-82CQZ6');
        result.should.have.property('preSharedKey', '4956445680390263');
        result.should.have.property('networkIndexId', 1);
        result.should.have.property('encryptionTypeId', 12);

        console.log(result);
        done();
      })
    });
  });
});