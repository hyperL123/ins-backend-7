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
    seeFollowers: function () {
      var _seeFollowers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var userName, page, pageSzie, aFollowers, totalFollowers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userName = _ref.userName, page = _ref.page;
                _context.prev = 1;
                pageSzie = 1;
                _context.next = 5;
                return _client["default"].user.findUnique({
                  where: {
                    userName: userName
                  },
                  include: {
                    followers: true
                  },
                  skip: (page - 1) * 5,
                  take: 5
                });

              case 5:
                aFollowers = _context.sent;
                _context.next = 8;
                return _client["default"].user.count({
                  where: {
                    userName: userName
                  },
                  include: {
                    followers: true
                  }
                });

              case 8:
                totalFollowers = _context.sent;
                return _context.abrupt("return", {
                  ok: true,
                  //take 5 per page
                  followers: aFollowers.followers.slice((page - 1) * pageSzie, (page - 1) * pageSzie + pageSzie),
                  totalPages: math.ceil(totalFollowers / 5)
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", {
                  ok: false,
                  error: "Something wrong on SeeFeollowers"
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }));

      function seeFollowers(_x, _x2) {
        return _seeFollowers.apply(this, arguments);
      }

      return seeFollowers;
    }()
  }
};
exports["default"] = _default;