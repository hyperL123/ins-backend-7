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
  Photo: {
    user: function user(_ref) {
      var userId = _ref.userId;
      return _client["default"].user.findUnique({
        where: {
          id: userId
        }
      });
    },
    hashTags: function hashTags(_ref2) {
      var id = _ref2.id;
      return _client["default"].hashTag.findMany({
        where: {
          photos: {
            some: {
              id: id
            }
          }
        }
      });
    },
    likes: function likes(_ref3) {
      var id = _ref3.id;
      return _client["default"].like.count({
        where: {
          photoId: id
        }
      });
    },
    commentNumber: function commentNumber(_ref4) {
      var id = _ref4.id;
      return _client["default"].comment.count({
        where: {
          photoId: id
        }
      });
    },
    comments: function comments(_ref5) {
      var id = _ref5.id;
      return _client["default"].comment.findMany({
        where: {
          photoId: id
        },
        include: {
          user: true
        }
      });
    },
    isMine: function isMine(_ref6, _, _ref7) {
      var id = _ref6.id;
      var loggedInUser = _ref7.loggedInUser;

      if (!loggedInUser) {
        return false;
      }

      return id === loggedInUser.id;
    },
    isLiked: function () {
      var _isLiked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref8, _, _ref9) {
        var id, loggedInUser, ok;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref8.id;
                loggedInUser = _ref9.loggedInUser;

                if (loggedInUser) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                _context.next = 6;
                return _client["default"].like.findUnique({
                  where: {
                    photoId_userId: {
                      photoId: id,
                      userId: loggedInUser.id
                    }
                  },
                  select: {
                    id: true
                  }
                });

              case 6:
                ok = _context.sent;

                if (!ok) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", true);

              case 9:
                return _context.abrupt("return", false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isLiked(_x, _x2, _x3) {
        return _isLiked.apply(this, arguments);
      }

      return isLiked;
    }()
  },
  HashTag: {
    photos: function () {
      var _photos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref10, _ref11) {
        var id, page, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref10.id;
                page = _ref11.page;
                _context2.next = 4;
                return _client["default"].hashTag.findUnique({
                  where: {
                    id: id
                  }
                }).photos();

              case 4:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function photos(_x4, _x5) {
        return _photos.apply(this, arguments);
      }

      return photos;
    }(),
    totalPhotos: function totalPhotos(_ref12) {
      var id = _ref12.id;

      _client["default"].photo.count({
        where: {
          hashTags: {
            some: {
              id: id
            }
          }
        }
      });
    }
  }
};
exports["default"] = _default;