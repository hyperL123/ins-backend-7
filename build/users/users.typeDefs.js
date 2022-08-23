"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    type User{\n        id: Int!\n        firstName:String!\n        lastName:String\n        userName:String!\n        email:String!\n        password:String!\n        createdAt:String!\n        updatedAt:String!\n        bio:String\n        avatar:String\n        followers: [User]\n        following: [User]\n        totalFollowers: Int!\n        totalFollowing: Int!\n        photos: [Photo]\n        isFollowing: Boolean!\n        isMe: Boolean!\n    }\n"])));

exports["default"] = _default;