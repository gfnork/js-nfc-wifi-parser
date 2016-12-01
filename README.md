# js-nfc-wifi-parser
parsing library for NFC WiFi application/vnd.wfa.wsc Mimetype Tags according to WiFi Alliance

The library is based on the Google Android Implementaiton according to WIFi Alliance Wi-Fi Protected Setup Specification

## Usage
Simply inlude via

```html
<script src="bower_components/js-nfc-wifi-parser/dist/nfc-wifi-parser.js"></script>
```

or via

```javascript
var nfcWifiParser = require('js-nfc-wifi-parser');
```

and use with

```javascript
var nfcPayload = [16, 14, 0, 62, 16, 38, 0, 1, 1, 16, 69, 0, 11, 87, 76, 65, 78, 45, 56, 50, 67, 81, 90, 54, 16, 3, 0, 2, 0, 34, 16, 15, 0, 2, 0, 12, 16, 39, 0, 16, 52, 57, 53, 54, 52, 52, 53, 54, 56, 48, 51, 57, 48, 50, 54, 51, 16, 32, 0, 6, -1, -1, -1, -1, -1, -1];

nfcWifiParser.parseBytes(nfcPayload, function (err, result) {
        console.log(result);
        done();
      })
```
