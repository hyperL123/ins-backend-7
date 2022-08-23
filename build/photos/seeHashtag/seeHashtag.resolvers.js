"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _default = {
  Query: {
    seeHashTag: function () {
      var _seeHashTag = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var name, tags;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name;
                _context.next = 3;
                return _client["default"].hashTag.findUnique({
                  where: {
                    name: name
                  }
                });

              case 3:
                tags = _context.sent;
                return _context.abrupt("return", tags);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function seeHashTag(_x, _x2) {
        return _seeHashTag.apply(this, arguments);
      }

      return seeHashTag;
    }()
  }
};
exports["default"] = _default;