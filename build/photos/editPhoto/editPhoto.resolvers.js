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

var _photos = require("../photos.utils");

var _default = {
  Mutation: {
    editPhoto: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, caption, loggedInUser, oldPhoto;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, caption = _ref.caption;
                loggedInUser = _ref2.loggedInUser;
                _context.prev = 2;
                _context.next = 5;
                return _client["default"].photo.findFirst({
                  where: {
                    id: id,
                    userId: loggedInUser.id
                  },
                  include: {
                    hashTags: true
                  }
                });

              case 5:
                oldPhoto = _context.sent;

                if (oldPhoto) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "Photo not found"
                });

              case 8:
                _context.next = 10;
                return _client["default"].photo.update({
                  where: {
                    id: id
                  },
                  data: {
                    caption: caption,
                    hashTags: {
                      disconnect: oldPhoto.hashTags.map(function (item) {
                        return {
                          name: item.name
                        };
                      }),
                      connectOrCreate: (0, _photos.processHashTags)(caption)
                    }
                  }
                });

              case 10:
                return _context.abrupt("return", {
                  ok: true
                });

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 13]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }())
  }
};
exports["default"] = _default;