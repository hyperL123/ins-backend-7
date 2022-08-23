"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

require("dotenv").config();

var _default = {
  Mutation: {
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var firstName, lastName, userName, email, password, existingUser, uglyPassword, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = _ref.firstName, lastName = _ref.lastName, userName = _ref.userName, email = _ref.email, password = _ref.password;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].user.findFirst({
                  where: {
                    OR: [{
                      userName: userName
                    }, {
                      email: email
                    }]
                  }
                });

              case 4:
                existingUser = _context.sent;

                if (!existingUser) {
                  _context.next = 7;
                  break;
                }

                throw new Error("This username/password is already token");

              case 7:
                _context.next = 9;
                return _bcrypt["default"].hash(password, 10);

              case 9:
                uglyPassword = _context.sent;
                _context.next = 12;
                return _client["default"].user.create({
                  data: {
                    userName: userName,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: uglyPassword
                  }
                });

              case 12:
                user = _context.sent;
                return _context.abrupt("return", {
                  ok: true
                });

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", {
                  ok: false,
                  error: "Cannot create account"
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;