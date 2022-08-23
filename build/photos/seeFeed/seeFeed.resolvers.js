"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _users = require("../../users/users.utils");

var _default = {
  Query: {
    seeFeed: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, __, _ref) {
        var loggedInUser, feed;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loggedInUser = _ref.loggedInUser;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].photo.findMany({
                  where: {
                    OR: [{
                      user: {
                        followers: {
                          some: {
                            id: loggedInUser.id
                          }
                        }
                      }
                    }, {
                      user: {
                        id: loggedInUser.id
                      }
                    }]
                  },
                  orderBy: {
                    createdAt: "desc"
                  }
                });

              case 4:
                feed = _context.sent;
                return _context.abrupt("return", feed);

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

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }())
  }
};
exports["default"] = _default;