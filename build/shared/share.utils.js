"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AWS_updatePhoto = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

_awsSdk["default"].config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});

var AWS_updatePhoto = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file, userId, folderName) {
    var _yield$file, filename, createReadStream, readStream, objName, uploadObj;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return file;

          case 2:
            _yield$file = _context.sent;
            filename = _yield$file.filename;
            createReadStream = _yield$file.createReadStream;
            readStream = createReadStream();
            objName = "".concat(folderName, "/").concat(userId, "/").concat(userId, "-").concat(Date.now(), "-").concat(filename);
            _context.next = 9;
            return new _awsSdk["default"].S3().upload({
              Bucket: "ins-uploader",
              Key: objName,
              ACL: "public-read",
              Body: readStream
            }).promise();

          case 9:
            uploadObj = _context.sent;
            return _context.abrupt("return", uploadObj.Location);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function AWS_updatePhoto(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.AWS_updatePhoto = AWS_updatePhoto;