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
    seePhotoLikes: function () {
      var _seePhotoLikes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var id, likes;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].like.findMany({
                  where: {
                    photoId: id
                  },
                  select: {
                    user: true
                  }
                });

              case 4:
                likes = _context.sent;
                return _context.abrupt("return", likes.map(function (like) {
                  return like.user;
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0.message);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function seePhotoLikes(_x, _x2) {
        return _seePhotoLikes.apply(this, arguments);
      }

      return seePhotoLikes;
    }()
  }
};
exports["default"] = _default;