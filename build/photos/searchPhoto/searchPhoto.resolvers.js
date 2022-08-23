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
    searchPhotos: function () {
      var _searchPhotos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var keyword, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keyword = _ref.keyword;
                _context.next = 3;
                return _client["default"].photo.findMany({
                  where: {
                    caption: {
                      startsWith: keyword
                    }
                  }
                });

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchPhotos(_x, _x2) {
        return _searchPhotos.apply(this, arguments);
      }

      return searchPhotos;
    }()
  }
};
exports["default"] = _default;