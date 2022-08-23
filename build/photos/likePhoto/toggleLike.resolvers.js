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
  Mutation: {
    toggleLike: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, loggedInUser, ok, like;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                loggedInUser = _ref2.loggedInUser;
                _context.prev = 2;
                _context.next = 5;
                return _client["default"].photo.findUnique({
                  where: {
                    id: id
                  }
                });

              case 5:
                ok = _context.sent;

                if (ok) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "Photo not found"
                });

              case 8:
                _context.next = 10;
                return _client["default"].like.findUnique({
                  where: {
                    photoId_userId: {
                      userId: loggedInUser.id,
                      photoId: id
                    }
                  }
                });

              case 10:
                like = _context.sent;

                if (!like) {
                  _context.next = 16;
                  break;
                }

                _context.next = 14;
                return _client["default"].like["delete"]({
                  where: {
                    photoId_userId: {
                      userId: loggedInUser.id,
                      photoId: id
                    }
                  }
                });

              case 14:
                _context.next = 18;
                break;

              case 16:
                _context.next = 18;
                return _client["default"].like.create({
                  data: {
                    user: {
                      connect: {
                        id: loggedInUser.id
                      }
                    },
                    photo: {
                      connect: {
                        id: id
                      }
                    }
                  }
                });

              case 18:
                return _context.abrupt("return", {
                  ok: true
                });

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0.message);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 21]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }())
  }
};
exports["default"] = _default;