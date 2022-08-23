"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../client"));

var _default = {
  User: {
    totalFollowing: function () {
      var _totalFollowing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id, num;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                _context.next = 3;
                return _client["default"].user.count({
                  where: {
                    following: {
                      some: {
                        id: id
                      }
                    }
                  }
                });

              case 3:
                num = _context.sent;
                return _context.abrupt("return", num);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function totalFollowing(_x) {
        return _totalFollowing.apply(this, arguments);
      }

      return totalFollowing;
    }(),
    totalFollowers: function () {
      var _totalFollowers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
        var id, num;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                _context2.next = 3;
                return _client["default"].user.count({
                  where: {
                    followers: {
                      some: {
                        id: id
                      }
                    }
                  }
                });

              case 3:
                num = _context2.sent;
                return _context2.abrupt("return", num);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function totalFollowers(_x2) {
        return _totalFollowers.apply(this, arguments);
      }

      return totalFollowers;
    }(),
    isMe: function () {
      var _isMe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3, _, _ref4) {
        var id, loggedInUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _ref3.id;
                loggedInUser = _ref4.loggedInUser;

                if (loggedInUser) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", false);

              case 4:
                return _context3.abrupt("return", id === loggedInUser.id);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function isMe(_x3, _x4, _x5) {
        return _isMe.apply(this, arguments);
      }

      return isMe;
    }(),
    isFollowing: function () {
      var _isFollowing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref5, _, _ref6) {
        var id, loggedInUser, exist;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref5.id;
                loggedInUser = _ref6.loggedInUser;

                if (loggedInUser) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", false);

              case 4:
                _context4.next = 6;
                return _client["default"].user.count({
                  where: {
                    userName: loggedInUser.userName,
                    following: {
                      some: {
                        id: id
                      }
                    }
                  }
                });

              case 6:
                exist = _context4.sent;
                console.log(exist, "exist");
                return _context4.abrupt("return", exist !== 0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function isFollowing(_x6, _x7, _x8) {
        return _isFollowing.apply(this, arguments);
      }

      return isFollowing;
    }(),
    photos: function photos(_ref7) {
      var id = _ref7.id;
      return _client["default"].user.findUnique({
        where: {
          id: id
        }
      }).photos();
    }
  }
};
exports["default"] = _default;