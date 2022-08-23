"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _share = require("../../shared/share.utils");

var _users = require("../../users/users.utils");

var _photos = require("../photos.utils");

var _graphqlUpload = require("graphql-upload");

var _default = {
  Upload: _graphqlUpload.GraphQLUpload,
  Mutation: {
    uploadPhoto: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var file, caption, loggedInUser, hashTagObj, fileUrl, photoCreation;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = _ref.file, caption = _ref.caption;
                loggedInUser = _ref2.loggedInUser;
                _context.prev = 2;
                hashTagObj = [];

                if (caption) {
                  hashTagObj = caption.match(/#[\w]+/g);
                }

                _context.next = 7;
                return (0, _share.AWS_updatePhoto)(file, loggedInUser.id, "photo");

              case 7:
                fileUrl = _context.sent;
                _context.next = 10;
                return _client["default"].photo.create({
                  include: {
                    hashTags: true
                  },
                  data: {
                    file: fileUrl,
                    user: {
                      connect: {
                        id: loggedInUser.id
                      }
                    },
                    caption: caption,
                    hashTags: {
                      connectOrCreate: (0, _photos.processHashTags)(caption)
                    }
                  }
                });

              case 10:
                photoCreation = _context.sent;
                return _context.abrupt("return", photoCreation);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 14]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }())
  }
};
exports["default"] = _default;