"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _client = _interopRequireDefault(require("../../client"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _users = require("../users.utils");

var _share = require("../../shared/share.utils");

var _graphqlUpload = require("graphql-upload");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  Upload: _graphqlUpload.GraphQLUpload,
  Mutation: {
    editProfile: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var firstName, lastName, userName, email, newPassword, bio, avatar, loggedInUser, avatarUrl, uglyPassword, updatedUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = _ref.firstName, lastName = _ref.lastName, userName = _ref.userName, email = _ref.email, newPassword = _ref.password, bio = _ref.bio, avatar = _ref.avatar;
                loggedInUser = _ref2.loggedInUser;
                _context.prev = 2;
                avatarUrl = null;

                if (!avatar) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return (0, _share.AWS_updatePhoto)(avatar, loggedInUser.id, "avatar");

              case 7:
                avatarUrl = _context.sent;

              case 8:
                uglyPassword = null;

                if (!newPassword) {
                  _context.next = 13;
                  break;
                }

                _context.next = 12;
                return _bcrypt["default"].hash(newPassword, 10);

              case 12:
                uglyPassword = _context.sent;

              case 13:
                _context.next = 15;
                return _client["default"].user.update({
                  //found the user with this id
                  where: {
                    id: loggedInUser.id
                  },
                  //update these info
                  data: _objectSpread(_objectSpread(_objectSpread({
                    firstName: firstName,
                    lastName: lastName,
                    userName: userName,
                    email: email
                  }, uglyPassword && {
                    password: uglyPassword
                  }), avatarUrl && {
                    avatar: avatarUrl
                  }), {}, {
                    bio: bio
                  })
                });

              case 15:
                updatedUser = _context.sent;

                if (!updatedUser.id) {
                  _context.next = 20;
                  break;
                }

                return _context.abrupt("return", {
                  ok: true
                });

              case 20:
                return _context.abrupt("return", {
                  ok: false,
                  error: "Couldnt update profile"
                });

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0.message);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 23]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }())
  }
};
exports["default"] = _default;