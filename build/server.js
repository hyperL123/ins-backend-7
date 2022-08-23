"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = require("./schema");

var _users = require("./users/users.utils");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _graphqlUpload = require("graphql-upload");

require("dotenv").config();

function startServer() {
  return _startServer.apply(this, arguments);
}

function _startServer() {
  _startServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var server, app;
    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            server = new _apolloServerExpress.ApolloServer({
              typeDefs: _schema.typeDefs,
              resolvers: _schema.resolvers,
              // Using graphql-upload without CSRF prevention is very insecure.
              csrfPrevention: false,
              context: function () {
                var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
                  var req, loggedInUser;
                  return _regenerator["default"].wrap(function _callee$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          req = _ref.req;
                          _context2.next = 3;
                          return (0, _users.getUser)(req.headers.token);

                        case 3:
                          loggedInUser = _context2.sent;
                          return _context2.abrupt("return", {
                            loggedInUser: loggedInUser
                          });

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee);
                }));

                function context(_x) {
                  return _context.apply(this, arguments);
                }

                return context;
              }(),
              cache: "bounded"
            });
            _context3.next = 3;
            return server.start();

          case 3:
            app = (0, _express["default"])(); // This middleware should be added before calling `applyMiddleware`.

            app.use((0, _graphqlUpload.graphqlUploadExpress)()); //app.use(logger("tiny"))

            app.use("/static", _express["default"]["static"]("uploads"));
            server.applyMiddleware({
              app: app
            });
            _context3.next = 9;
            return new Promise(function (r) {
              return app.listen({
                port: process.env.PORT || 4000
              }, r);
            });

          case 9:
            console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _startServer.apply(this, arguments);
}

startServer();