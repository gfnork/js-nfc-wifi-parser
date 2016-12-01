var nfcPayload = require('../mocks/nfc-payload.json');
var nfcWifiParser = require('../../src/nfc-wifi-parser.js');
var should = require('should');

describe('nfcWiFiParser', function () {
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